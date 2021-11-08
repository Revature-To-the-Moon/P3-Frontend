import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(public router: Router) { }

  post: Post = {
    id: 0,
    title:'',
    message: '',
    date: new Date(0),
    username: ''
  }

  ngOnInit(): void {
  }

  onSubmit(postForm: NgForm){
    console.log("Comment submitted")
  }

}
