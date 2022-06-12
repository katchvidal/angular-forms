import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  // styles: [
  // ]
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  templateMenu: MenuItem[] = [
    { texto: 'Basicos', route: 'basicos'},
    { texto: 'Dinamicos', route: 'dinamicos'},
    { texto: 'Switches', route: 'switches'},
  ]
  ReactiveMenu: MenuItem[] = [
    { texto: 'Basicos', route: 'reactive/basicos'},
    { texto: 'Dinamicos', route: 'reactive/dinamicos'},
    { texto: 'Switches', route: 'reactive/switches'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
