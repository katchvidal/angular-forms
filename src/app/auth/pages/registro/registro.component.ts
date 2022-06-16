import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailvalidatorService } from 'src/app/services/emailvalidator.service';
import { ValidatorService } from 'src/app/services/validator.service';
// import { nameLastPatter, emailPattern, noSameNickName } from '../../../shared/validator/validaciones'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  f: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nameLastPatter)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noSameNickName]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    checkpassword: ['', [Validators.required, Validators.minLength(6)]],
  }, { validators: [this.validatorService.sameFields('password', 'checkpassword')] })




  get emailErrorMsg(): string {
    const errors = this.f.get('email')?.errors;
    if (errors?.['required'] ) {
      return 'Email es Obligatorio'
    }
    if (errors?.['pattern'] ) {
      return 'Email No tiene Formato Correo Electronico'
    }
    if (errors?.['emailtaked'] ) {
      return 'Email Ya Existe'
    }
    return ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailvalidatorService,
  ) { }

  ngOnInit(): void {
  }

  fieldValid(field: string) {
    return this.f.get(field)?.invalid && this.f.get(field)?.touched
  }
  // emailRequired() {
  //   return this.f.get('email')?.errors?.['required'] && this.f.get('email')?.touched
  // }
  // emailShape() {
  //   return this.f.get('email')?.errors?.['pattern'] && this.f.get('email')?.touched
  // }
  // emailTake() {
  //   return this.f.get('email')?.errors?.['emailtaked'] && this.f.get('email')?.touched
  // }

  onSubmit() {
    if (this.f.invalid) {
      this.f.markAllAsTouched()
      return;
    }

    this.f.reset()
  }


}
