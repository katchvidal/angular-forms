import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  terminosycondiciones : boolean = false;
  persona = {
    genre: 'F',
    notificacion : true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
