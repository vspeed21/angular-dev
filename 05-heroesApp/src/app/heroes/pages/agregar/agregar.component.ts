import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/index';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
    }
  `]
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      label: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      label: 'Marvel - Comics'
    }
  ]

  heroe: Heroes = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: '',
  }

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    if(!this.router.url.includes('editar')) return;

    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.heroesService.getHeroe(id) )
        )
        .subscribe(heroe => this.heroe = heroe);
  }

  guardarHeroe() {
    if(this.heroe.id) {
      //Actulaizar el heroe
      this.heroesService.actualizarHeroe(this.heroe)
          .subscribe(() => this.showSnackBar('Registro actualizado correctamente'))
    }else{
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['heroes/editar', heroe.id]);
          this.showSnackBar('Registro creado correctamente');
        })
    }
  }

  eliminar() {
    this.heroesService.eliminarHeroe(this.heroe.id!)
      .subscribe(resp => {
        this.router.navigate(['/heroes/listado']);
      })
  }

  showSnackBar(msg: string) {
    this.snackBar.open(msg, 'Ok', {
      duration: 3000,
    });
  }

}
