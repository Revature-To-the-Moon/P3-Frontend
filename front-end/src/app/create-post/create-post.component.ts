import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Root } from '../models/root';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(public router: Router) { }

  root: Root = {
    id: 0,
    title: '',
    message: '',
    totalVote: 1,
    dateTime: new Date(0),
    userName: '',
    comments: []
  }

  ngOnInit(): void {
  }

  onSubmit(postForm: NgForm) {
    console.log("Post submitted")
  }

}
