import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { post } from '../models/post';
import { RootServiceService } from '../service/root-service.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  
  constructor(private router: Router, private rService: RootServiceService) { }

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
    console.log("Post submitted")
  }

}
