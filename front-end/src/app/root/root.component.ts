import { Component, OnInit } from '@angular/core';
import { RootServiceService } from '../service/root-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToCreatePost(): void {
    this.router.navigateByUrl('create');
  }
}
