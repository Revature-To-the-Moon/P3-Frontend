import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Root } from '../models/root';
import { RootServiceService } from '../service/root-service.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})

export class RootComponent implements OnInit {

  constructor(private router: Router, private rootService: RootServiceService, public auth: AuthService) { }

  roots: Root[] = [];
  popular: Root[] = [];
  user: string = '';

  ngOnInit(): void {
    this.rootService.getAllRoots().then(result => {
      result.sort((a, b) => (a.dateTime < b.dateTime) ? 1 : -1);
      this.roots = result;
      console.log(result);
    })

    this.rootService.getAllRoots().then(result => {
      result.sort((a, b) => (a.totalVote < b.totalVote) ? 1 : -1);
      this.popular = result;
    })

    this.auth.user$.subscribe((user) => {
      if (user?.preferred_username) {
        this.user = user.preferred_username
      }
    })
  }

  goToCreatePost(): void {
    this.router.navigateByUrl('create-post');
  }

  sortPopular(): void {
    this.rootService.getAllRoots().then(result => {
      result.sort((a, b) => (a.totalVote < b.totalVote) ? 1 : -1);
      this.roots = result;
    })
  }

  sortNewest(): void {
    this.rootService.getAllRoots().then(result => {
      result.sort((a, b) => (a.dateTime < b.dateTime) ? 1 : -1);
      this.roots = result;
    })
  }

  sortOldest(): void {
    this.rootService.getAllRoots().then(result => {
      result.sort((a, b) => (a.dateTime > b.dateTime) ? 1 : -1);
      this.roots = result;
    })
  }
}
