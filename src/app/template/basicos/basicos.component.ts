import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild( 'f' ) f!: NgForm;

  initialForm = {
    nombre: 'RTX 3060 ti',
    precio: 0,
    existencias : 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  //  Funcion para chequear nombre valido en el formulario
  nombreValid() : boolean {
    return this.f?.controls['nombre']?.invalid && this.f.controls['nombre']?.touched
  }

  precioValid() : boolean {
    return this.f?.controls['precio']?.touched && this.f?.controls['precio']?.value <= 0
  }
  existenciasValid() : boolean {
    return this.f?.controls['existencias']?.touched && this.f?.controls['existencias']?.value <= 0
  }

  onSubmit(  ){
    // console.log( this.f.value.precio );
    console.log('Posteo Formulario Correctamente');
    this.f.resetForm();
  }

} 
