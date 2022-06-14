import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  f: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Metal Gear'], ['FIFA 2022']
    ], [Validators.required])
  })

  newItem: FormControl = this.formBuilder.control('', [Validators.required])

  get favoritosArr() {
    return this.f.get('favoritos') as FormArray;
  }
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.f.invalid) {
      this.f.markAllAsTouched();
      return;
    }
    console.log(this.f.value)
    this.f.reset();
  }

  campoInvalid(field: string) {
    return this.f.controls[`${field}`]?.errors && this.f.controls[`${field}`]?.touched
  }

  add() {
    if (this.newItem.invalid) {
      return;
    }

    // this.favoritosArr.push(new FormControl(this.newItem.value, [ Validators.required ]));
    this.favoritosArr.push(this.formBuilder.control(this.newItem.value, [Validators.required]));

    this.newItem.reset();
  }

  delete ( i : any ){
    // console.log( i );
    this.favoritosArr.removeAt( i )
    
  }
}
