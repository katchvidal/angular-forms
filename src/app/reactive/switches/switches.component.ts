import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  f : FormGroup = this.formBuilder.group({
    genero : [ 'M' , [ Validators.required ]],
    notificationes : [ false , [ Validators.required ]],
    condiciones: [true, [ Validators.required, Validators.requiredTrue ]]
  })

  persona = {
    genero : 'F',
    notificationes: true,
  }

  constructor( private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.f.reset( this.persona )

    // this.f.valueChanges.subscribe(
    //   form => { 
    //     console.log( form );
        
    //   }
    // )

    this.f.get('condiciones')?.valueChanges.subscribe( condiciones => console.log('Ha aceptado las condiciones formularios reactivos'))
  }

  onSubmit(){
    const formValue = { ...this.f.value }
    delete formValue.condiciones
    this.persona = formValue;
  }

}
