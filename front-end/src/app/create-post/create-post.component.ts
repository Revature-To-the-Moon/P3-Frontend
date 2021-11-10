import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { Post } from '../models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  
  constructor(public router: Router) { }

  post: Post = {
    id: 0,
    title:'',
    message: '',
    totalVote: 0,
    dateTime: new Date(0),
    userName: '',
    comments: []
  }

  ngOnInit(): void {
  }

  onSubmit(postForm: NgForm){
    console.log("Post submitted")
  }

}
