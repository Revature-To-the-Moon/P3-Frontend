import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';
import { FollowingPost } from '../models/followingPost';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl = 'https://52.141.211.229/user/api';

  constructor(private http: HttpClient) { }
  
  // getAll(): Observable<any> {
  //   return this.http.get(this.apiUrl + '_sort=id&order=desc')
  //   .pipe();
  // }

  getUserById(id: number): Promise<User>  
  {
    return this.http.get<User>(this.apiUrl + "/user/id/" + id).toPromise();
  }

  getAllRoots(): Promise<Root[]>
  {
    return this.http.get<[]>(this.apiUrl + "/Root/").toPromise();
  }

  getFollowedPostByUserId(id: number): Promise<FollowingPost[]>
  {
    return this.http.get<[]>(this.apiUrl + "/followingpost/userid/"+ id).toPromise();
  }

  getAllComments(): Promise<Comment[]>
  {
    return this.http.get<[]>(this.apiUrl + "/Comment/").toPromise();
  }
}
