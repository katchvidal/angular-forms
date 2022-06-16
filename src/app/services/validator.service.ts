import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  //  TODO: Expresion Regular Nombre Apellido Patter
  nameLastPatter: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

  noSameNickName(arg: FormControl): ValidationErrors | null {
    const value: string = arg.value.trim().toLowerCase()
    if (value === 'strider') {
      return {
        noStrider: true
      }
    }

    return null;
  }

  sameFields(field01: string, field02: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(field01)?.value;
      const pass2 = formGroup.get(field02)?.value;
      // console.log( pass1, pass2 )
      if (pass1 !== pass2) {
        formGroup.get(field02)?.setErrors({ notSame: true })
        return {
          notSame: true
        }
      }
      formGroup.get(field02)?.setErrors(null)
      return null;
    }
  }

  constructor() { }
}
