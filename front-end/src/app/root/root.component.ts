import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Root } from '../models/root';
import { RootServiceService } from '../service/root-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private router: Router, private rootService: RootServiceService) { }

  roots: Root[] = [];

  ngOnInit(): void {
    this.rootService.getAllRoots().then(result => {
      result.sort((a, b) => (a.dateTime < b.dateTime) ? 1 : -1);
      this.roots = result;
      console.log(result);
    })
  }

  goToCreatePost(): void {
    this.router.navigateByUrl('create-post');
  }

  goToComment(): void {
    this.router.navigateByUrl('comment');
  }
}
