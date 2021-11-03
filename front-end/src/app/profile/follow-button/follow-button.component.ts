import { Component, OnInit } from '@angular/core';
import { users } from '../../models/user';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {

  constructor() { }

  users!:[];

  ngOnInit(): void {
  }

}
