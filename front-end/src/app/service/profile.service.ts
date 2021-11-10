import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Root } from '../models/root';
import { Post } from '../models/post';
import { Comment } from '../models/Comment';
import { FollowingPost } from '../models/FollowingPost';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl = 'https://52.141.211.229/user/api';
  rootUrl = 'https://52.141.211.229/post/api';

  constructor(private http: HttpClient) { }
  
  // getAll(): Observable<any> {
  //   return this.http.get(this.apiUrl + '_sort=id&order=desc')
  //   .pipe();
  // }

  getUserById(id: number): Promise<User>  
  {
    return this.http.get<User>(this.apiUrl + "/user/id/" + id).toPromise();
  }

  getAllUsers(): Promise<User[]>
  {
    return this.http.get<[]>(this.apiUrl + "/user/").toPromise();
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

  getAllPostsAndCommentsByUser(name: string): any[]
  {
    var posts = {} as Array<any>;
    var result = this.http.get<[]>(this.rootUrl + "/post/");
    result.forEach(post => {
      posts.push(post);
    });
    
    return posts;
  }
}
