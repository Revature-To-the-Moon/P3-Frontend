import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';
import { RootServiceService } from '../service/root-service.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(public router: Router, private currentRoute: ActivatedRoute, private rootService: RootServiceService) { }

  id = 0;

  comment: Comment = {
    id: 0,
    message: '',
    totalvote: 0,
    dateTime: '',
    userName: '',
    RootId: 0,
    CommentId: 0,
  }

  root: Root = {
    id: 0,
    title: '',
    message: '',
    totalVote: 0,
    dateTime: new Date(0),
    userName: '',
    comments: []
  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];

      this.rootService.getRootById(this.id).then((result: Root) => {
        this.root = result;
        console.log(result)
      })
    })
  }

  onSubmit(postForm: NgForm) {
    console.log("Comment submitted")
  }

}
