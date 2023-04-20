import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroes } from '../interfaces/index';
import { enviroment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private apiUrl = enviroment.apiUrl;

  constructor(private http: HttpClient) { }

  getHeroes() {
    return this.http.get<Heroes[]>(`${this.apiUrl}/heroes`);
  }

  getHeroe(id: string ) {
    return this.http.get<Heroes>(`${this.apiUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string) {
    return this.http.get<Heroes[]>(`${this.apiUrl}/heroes?q=${termino}&_limit=5`);
  }

  agregarHeroe(heroe: Heroes) {
    return this.http.post<Heroes>(`${this.apiUrl}/heroes`, heroe);
  }

  actualizarHeroe(heroe: Heroes) {
    return this.http.put<Heroes>(`${this.apiUrl}/heroes/${heroe.id}`, heroe);
  }

  eliminarHeroe(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/heroes/${id}`);
  }
}
