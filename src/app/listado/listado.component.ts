import { Component, OnInit } from '@angular/core';


interface alumno {
  nombre: string;
  apellido: string;
  edad: number;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public alumnos: alumno[] = [
    {
      nombre: 'Facundo',
      apellido: 'Rojas',
      edad: 32
    },
    {
      nombre: 'Soledad',
      apellido: 'Alaníz',
      edad: 27
    },
    {
      nombre: 'Martín',
      apellido: 'Serrano',
      edad: 30
    },
    {
      nombre: 'Emanuel',
      apellido: 'Castillo',
      edad: 15
    },
    {
      nombre: 'Jeremías',
      apellido: 'Rojas',
      edad: 18
    },
    {
      nombre: 'Teodoro',
      apellido: 'Vargas',
      edad: 19
    },
    {
      nombre: 'Emanuel',
      apellido: 'Castillo',
      edad: 23
    },
    {
      nombre: 'Jeremías',
      apellido: 'Rojas',
      edad: 18
    },
    {
      nombre: 'Joaquín',
      apellido: 'Luna',
      edad: 16
    },
  ];

  public mensaje: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public verCantidadInscriptosMayoresDeEdad(): void {
    const alumnosMayoresDeEdad = this.alumnos.filter( (item: alumno) => item.edad >= 18);
    this.mensaje = `La cantidad de alumnos es ${alumnosMayoresDeEdad.length}`;
  }

}
