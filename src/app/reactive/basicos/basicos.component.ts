import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  //  Estableciendo estructura del Formulario
  f : FormGroup = this.formBuild.group({
    nombre: [, [ Validators.required, Validators.minLength(3)] ],
    precio: [ , [ Validators.required, Validators.min(0)] ],
    existencias: [ , [ Validators.required, Validators.min(0)] ],
  })
  constructor( private formBuild : FormBuilder ) { }

  ngOnInit(): void {
    this.f.reset({
      nombre: 'RTX 4060 ti',
      precio: 0,
      existencias: 0
    })
  }

  onSubmit(){
    if ( this.f.invalid ){
      this.f.markAllAsTouched();
      return;
    }
    console.log( this.f.value )
    this.f.reset();
  }

  campoInvalid( field : string ){
    return this.f.controls[`${field}`]?.errors && this.f.controls[`${field}`]?.touched
  }
}
