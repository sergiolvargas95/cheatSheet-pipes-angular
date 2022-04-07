import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Iron Man';
  nombre2: string = 'sErGIo vArGAS MElEndeZ'
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  videoUrl :string = "https://www.youtube.com/embed/o_m7MHHjhcQ";
  PI: number = Math.PI;
  activar: boolean = true;
  porcentaje: number = 0.234;
  salario = 1234.5;
  fecha: Date = new Date();
  idioma: string = 'es';


  valorPromesa = new Promise<string>((resolve) =>{
    setTimeout(() => {
      resolve('llegó la data');
    }, 4500);
  })
  heroe = {
    nombre:'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }
}
