import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  newItem: string = '';
  persona: Persona = {
    nombre: 'Kyocera',
    favoritos: [
      { nombre: 'Pizzas', id: 1 },
      { nombre: 'Hamburguesas', id: 2 },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('Formulario Postedo');
  }

  delete(i: any) {
    console.log('delete id: ', i);
    this.persona.favoritos.splice(i, 1)

  }

  addnewItem() {
    const newFav: Favorito = {
      nombre: this.newItem,
      id: this.persona.favoritos.length + 1,
    }

    this.persona.favoritos.push({ ...newFav })
    this.newItem = '';
  }

}
