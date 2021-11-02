import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Loginfunc(){
    alert('Wheres the uhhhhh.. wheres the gabba goo?')
  }

  Registerfunc(){
    alert('right here bruv')
  }

  Logoutfunc(){
    alert('I will miss u :(')
  }
}
