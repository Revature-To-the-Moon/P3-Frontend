import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  private rootUrl: string = 'https://tothemoon.azurewebsites.net/api/post';

  constructor(private http: HttpClient) { }

  addRoot(post: Post): Promise<Post> {
    return this.http.post<Post>(this.rootUrl, post).toPromise();
  }

  getAllRoots(): Promise<Post[]> {
    return this.http.get<Post[]>(this.rootUrl).toPromise();
  }

  getRootById(id: number): Promise<Post> {
    return this.http.get<Post>(this.rootUrl + '/' + id).toPromise();
  }

}
