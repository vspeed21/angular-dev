import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interfaces/index';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {
  termino: string = '';
  heroes: Heroes[] = [];
  heroeSeleccionado: Heroes | undefined;
  error: boolean = false;

  constructor( private heroesService: HeroesService) {}

  buscar() {
    this.heroesService.getSugerencias(this.termino.trim())
        .subscribe(heroes => this.heroes = heroes);
  }

  optionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if(!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroes = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroe(heroe.id!)
        .subscribe({
          next: heroe => this.heroeSeleccionado = heroe,
        })
  }
}
