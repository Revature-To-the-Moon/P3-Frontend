import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: post = {
    id: 0,
    title:'',
    message: '',
    date: new Date(0),
    username: ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
