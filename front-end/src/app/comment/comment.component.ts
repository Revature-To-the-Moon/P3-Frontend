import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Root } from '../models/root';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(public router: Router) { }

  root: Root = {
    id: 0,
    title: '',
    message: '',
    totalVote: 3,
    dateTime: new Date(0),
    userName: ''
  }

  ngOnInit(): void {
  }

  onSubmit(postForm: NgForm) {
    console.log("Comment submitted")
  }

}
