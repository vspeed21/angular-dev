import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  nombreLower: string = 'victor'
  nombreUpper: string = 'VICTOR'
  nombreCompleto: string = 'viCtoR tOrReS'

  fecha: Date = new Date();
}
