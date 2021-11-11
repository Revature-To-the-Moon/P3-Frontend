import { Component, OnInit } from '@angular/core';
import { Root } from '../models/root';
import { RootServiceService } from '../service/root-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string = "";
  value = '';
  constructor(private service: RootServiceService) { }
  roots:Root[] = [];
  result;

  onEnter(value: string) { this.value = value; 
  this.result = this.roots.filter(res => res.title.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()) || 
  res.userName.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()))
  }


  ngOnInit(): void {
    this.service.getAllRoots().then(result =>{
      this.roots =result;
    })
  }
  
  

}
