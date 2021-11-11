import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';
import { Observable } from 'rxjs';
import { User } from '@auth0/auth0-spa-js';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  private rootUrl: string = "https://52.141.211.229/post/api/post";
  private rootUrl_1: string = "https://52.141.211.229/post/api/Comment";
  private userUrl: string = "https://52.141.211.229/user/api/user";

  constructor(private http: HttpClient) { }

  addRoot(root: Root): Promise<Root> {
    return this.http.post<Root>(this.rootUrl, root).toPromise();
  }

  addComment(comment: Comment): Promise<Comment> {
    return this.http.post<Comment>(this.rootUrl_1, comment).toPromise();
  }

  getAllRoots(): Promise<Root[]> {
    return this.http.get<Root[]>(this.rootUrl).toPromise();
  }

  getRootById(id: number): Promise<Root> {
    return this.http.get<Root>(this.rootUrl + '/' + id).toPromise();
  }

}
