import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/index';

@Pipe({
  name: 'imagen',
  pure: false,
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroes): string {
    if(!heroe.id && !heroe.alt_img) {
      return 'assets/no-image.png';
    }else if(heroe.alt_img) {
      return heroe.alt_img;
    }
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
