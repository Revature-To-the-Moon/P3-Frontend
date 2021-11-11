import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';
import { FollowingPost } from '../models/FollowingPost';
import { Post } from '../models/post';
import { Followings } from '../models/Followings';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl = 'https://52.141.211.229/user/api';
  rootUrl = 'https://52.141.211.229/post/api';
S
  constructor(private http: HttpClient) { }

  // getAll(): Observable<any> {
  //   return this.http.get(this.apiUrl + '_sort=id&order=desc')
  //   .pipe();
  // }

  getUserById(id: number): Promise<User> {
    return this.http.get<User>(this.apiUrl + "/user/id/" + id).toPromise();
  }

  getAllUsers(): Promise<User[]> {
    return this.http.get<[]>(this.apiUrl + "/user/").toPromise();
  }

  getAllPosts(): Promise<Post[]> {
    return this.http.get<[]>(this.rootUrl + "/post/").toPromise();
  }

  getAllComments(): Promise<Comment[]>
  {
    return this.http.get<[]>(this.apiUrl + "/Comment/").toPromise();
  }

  getFollowedPostByUserId(id: number): Promise<FollowingPost[]>
  {
    return this.http.get<[]>(this.apiUrl + "/followingpost/userid/"+ id).toPromise();
  }

  //we can use updateUser to follow/unfollow both posts and other users, since both following models are contained within the user
  updateUser(updatedUser: User): Promise<User> {
    return this.http.post<User>(this.apiUrl+'/user/', updatedUser).toPromise();
  }
  

  // testcase for this fails and is commented out. 
  getAllPostsAndCommentsByUser(name: string): any[]
  {
    var LoC = [] as Array<any>

    this.http.get<[]>(this.rootUrl + "/post/").toPromise().then(
      (posts: any[]) => {
        // posts now has every single post, including comments, in the entire website...
        posts.forEach(posty => {
          if (posty.userName == name)
          {
            LoC.push(posty);
          }
          posty.comments.forEach(comery => {
            LoC = this.addCommentToList(comery, LoC, name);
          });
        });
        LoC.sort((a,b) => (a.dateTime > b.dateTime ? 1 : -1));
      });
    return LoC;
  }

  addCommentToList(Com: Comment, LoC: Comment[], name: string) {
    if (Com.comments) {
      Com.comments.forEach(commy => {
        LoC = this.addCommentToList(commy, LoC, name);
      });
    }
    // final comment, or already went through the children
    if (Com.userName == name)
    {
      LoC.push(Com);
    }

    return LoC;
  }
}
