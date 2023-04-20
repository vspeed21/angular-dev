import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/index';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit{
  
  heroes: Heroes[] = [];

  constructor(private heroeService: HeroesService) {}

  ngOnInit(): void {
    this.heroeService.getHeroes()
        .subscribe({
          next: heroes => this.heroes = heroes,
          error: err => console.log(err)
        });
  }


}
