import { Component, OnInit } from '@angular/core';
import { Root } from '../models/root';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchTerm: string;
  page = 1;
  pageSize = 4;
  collectionSize: number;
  roots: Root[] =[];
  allRoots: Root[] = [];
  private rootUrl: string = "https://52.141.211.229/post/api/post";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Root[]>(this.rootUrl)
      .subscribe((data:Root[]) => {
        this.collectionSize = data.length;
        this.roots = data;
        this.allRoots = this.roots;
      });
  }
  search(value: string): void {
    this.roots = this.allRoots.filter((val) =>
    val.userName.toLowerCase().includes(value));
    this.collectionSize = this.roots.length;
  }

}
