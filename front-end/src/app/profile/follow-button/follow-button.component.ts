import { Component, OnInit, Input } from '@angular/core';
import { users } from '../../models/user';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {
  @Input() buttonConfig: any;
  
  constructor() { }
  public isFollow: boolean = false;

  ngOnInit(): void {
  }
  
  onClick() {
    this.isFollow = !this.isFollow;
  }

}
