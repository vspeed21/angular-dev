import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroes } from '../../interfaces/index';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService) {}

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(switchMap( ({id}) => this.heroeService.getHeroe(id) ))
        .subscribe(heroe => this.heroe = heroe);
  }
}
