import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../models/Comment';
import { RootServiceService } from '../service/root-service.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {

  constructor(public router: Router, private currentRoute: ActivatedRoute, private rootService: RootServiceService, public auth: AuthService) { }

  id = 0;
  user: string = '';
  comments: Comment[] = [];

  comment: Comment = {
    id: 0,
    parentId: 0,
    rootId: 0,
    message: '',
    totalVote: 0,
    dateTime: new Date(0),
    userName: '',
    votes: [],
    comments: []
  }

  root: Comment = {
    id: 0,
    parentId: 0,
    rootId: 0,
    message: '',
    totalVote: 0,
    dateTime: new Date(0),
    userName: '',
    votes: [],
    comments: []
  }

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      if (user?.preferred_username) {
        this.user = user.preferred_username
      }
    })

    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];

      this.rootService.getCommentById(this.id).then((result: Comment) => {
        this.root = result;
        result.comments.sort((a, b) => (a.totalVote < b.totalVote) ? 1 : -1)
        console.log(result)
      })
    })
  }

  onSubmit(postForm: NgForm) {
    console.log("Comment submitted")

    this.auth.user$.subscribe((user) => {
      if (user?.preferred_username) {
        this.comment.userName = user.preferred_username
      }

      this.currentRoute.params.subscribe(params => {
        this.comment.rootId = params['id'];
      })

      this.comment.dateTime = new Date();
      this.comment.parentId = this.root.id;
      console.log(this.root)

      this.rootService.addComment(this.comment).then(res => {
        alert("Post successfully created")
        location.reload()
      })
    })
  }

}
