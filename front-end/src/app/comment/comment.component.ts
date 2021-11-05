import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { post } from '../models/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(public router: Router) { }

  post: post = {
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
