import { Component, OnInit } from '@angular/core';
import { Root } from '../models/root';
import { RootServiceService } from '../service/root-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: RootServiceService) { }
  roots:Root[] = []
  ngOnInit(): void {
    this.service.getRoots().subscribe
    (
      data =>
      {
        this.roots = data;
      }
    )
  }

}
