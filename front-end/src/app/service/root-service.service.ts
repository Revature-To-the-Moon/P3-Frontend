import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root } from '../models/root';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  private rootUrl: string = "https://52.141.211.229/post/api/post";

  constructor(private http: HttpClient) { }

  addRoot(Root): Promise<Root> {
    return this.http.post<Root>(this.rootUrl, Root).toPromise();
  }

  getAllRoots(): Promise<Root[]> {
    return this.http.get<Root[]>(this.rootUrl).toPromise();
  }

  getRootById(id: number): Promise<Root> {
    return this.http.get<Root>(this.rootUrl + '/' + id).toPromise();
  }

}
