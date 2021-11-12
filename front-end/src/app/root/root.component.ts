import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Root } from '../models/root';
import { RootServiceService } from '../service/root-service.service';
import { AuthService } from '@auth0/auth0-angular';
import { Vote } from '../models/vote';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})

export class RootComponent implements OnInit {

  constructor(private router: Router, private rootService: RootServiceService, public auth: AuthService) { }

  roots: Root[] = [];
  votes: Vote[] = [];

  vote: Vote = {
    id: 0,
    userName: '',
    value: 0,
    commentId: 0
  }
  counter: number = 0;

  ngOnInit(): void {
    this.rootService.getAllRoots().then(result => {
      result.sort((a, b) => (a.dateTime < b.dateTime) ? 1 : -1);
      this.roots = result;
      console.log(result);
    })

    this.rootService.getAllVotes().then(result => {
      this.votes = result;
    })
  }

  goToCreatePost(): void {
    this.router.navigateByUrl('create-post');
  }

  goToComment(id: number): void {
    this.router.navigateByUrl(`comment/` + id);
  }

  sortPopular(): void {
    this.rootService.getAllRoots().then(result => {
      result.sort((a, b) => (a.totalVote > b.totalVote) ? 1 : -1);
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

  likePost(id: number){
    this.rootService.getRootById(id).then(result => {
      result.totalVote++;

      this.rootService.updateRoot(result).then(res => {
        this.rootService.getAllRoots().then(result => {
          result.sort((a, b) => (a.dateTime < b.dateTime) ? 1 : -1);
          this.roots = result;
        })
        console.log("Post liked")
      })
    })
  }

  unLikePost(id: number){
    this.rootService.getRootById(id).then(result => {
      result.totalVote--;

      this.rootService.updateRoot(result).then(res => {
        this.rootService.getAllRoots().then(result => {
          result.sort((a, b) => (a.dateTime < b.dateTime) ? 1 : -1);
          this.roots = result;
        })
        console.log("Post unliked")
      })
    })
  }
}
