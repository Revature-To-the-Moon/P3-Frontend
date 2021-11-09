import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private router: Router) { }

  user: User = {
    username: ''
  };

  ngOnInit(): void {

  }

  goToCreatePost(): void {
    this.router.navigateByUrl('create-post');
  }

  goToComment(): void {
    this.router.navigateByUrl('comment');
  }
}
