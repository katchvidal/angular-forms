import { FormControl } from "@angular/forms"

//  TODO: Expresion Regular Nombre Apellido Patter
export const nameLastPatter: string = '([a-zA-Z]+) ([a-zA-Z]+)'
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"

export const noSameNickName = (arg: FormControl) => {
    const value = arg.value.trim().toLowerCase()
    if (value === 'strider') {
        return {
            noStrider: true
        }
    }

    return null;
}