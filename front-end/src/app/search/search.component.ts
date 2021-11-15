import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  roots: Root[] = [];
  result;
  @ViewChild('box') inputBox;

  onEnter(value: string) {
    this.value = value;
    if (value) {
      this.result = this.roots.filter(res => res.title.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()) ||
        res.userName.toLocaleLowerCase().includes(this.value.toLocaleLowerCase()))
      console.log(this.result)
    }
    else if(!value){
      this.result = [];
      this.inputBox.nativeElement.value = '';
    }
  }
  onClear(){
    this.result = [];
  }


  ngOnInit(): void {
    this.service.getAllRoots().then(result => {
      this.roots = result;
    })
  }



}
