import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  nombre: string = 'Roxama';
  genero: string = 'femenino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  estimadoMap = {
    'masculino': 'Estimado',
    'femenino': 'Estimada'
  }
  cambiarMasculino() {
    this.nombre = 'Victor';
    this.genero = 'masculino';
  }
  cambiarFemenino() {
    this.nombre = 'Roxana';
    this.genero = 'femenino';
  }

  //i18nPlural
  clientes: string[] = ['Victor', 'Roxana', 'Maria', 'Marvin'];

  clientesPlural = {
    '=0': 'no tenemos clientes en fila. Puede pasar',
    '=1': 'tenemos un cliente en fila. Espere por favor...',
    'other': 'tenemos # clientes en fila. Espere por favor...',
  }

  atender() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'Victor',
    edad: 20,
    direccion: 'Honduras'
  }

  myObservable = interval(1000);
}
