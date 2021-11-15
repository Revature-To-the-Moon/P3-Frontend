import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';
import { FollowingPost } from '../models/FollowingPost';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { Followings } from '../models/Followings';
import { RecentActivity } from '../models/RecentActivity';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiUrl = 'https://52.141.211.229/user/api';
  rootUrl = 'https://52.141.211.229/post/api';
  followUrl = 'https://52.141.211.229/user/api/following';

  constructor(private http: HttpClient) { }

  
  // getAll(): Observable<any> {
  //   return this.http.get(this.apiUrl + '_sort=id&order=desc')
  //   .pipe();
  // }

  getUserById(id: number): Promise<User>  
  {
    return this.http.get<User>(this.apiUrl + "/user/id/" + id).toPromise();
  }
  getUserByName(username: string): Promise<User> {
    return this.http.get<User>(this.apiUrl + "/user/username/" + username).toPromise();
  }

  getAllUsers(): Promise<User[]>
  {
    return this.http.get<[]>(this.apiUrl + "/user/").toPromise();
  }

  getAllPosts(): Promise<Root[]>
  {
    return this.http.get<Root[]>(this.rootUrl + "/post/").toPromise();
  }

  getAllComments(): Promise<Comment[]>
  {
    return this.http.get<[]>(this.rootUrl + "/comment/").toPromise();
  }

  getFollowedPostByUserId(id: number): Promise<FollowingPost[]>
  {
    return this.http.get<[]>(this.apiUrl + "/followingpost/userid/"+ id).toPromise();
  }

  //we can use updateUser to follow/unfollow both posts and other users, since both following models are contained within the user
  updateUser(updatedUser: User): Promise<User> {
    return this.http.post<User>(this.apiUrl+'/user/', updatedUser).toPromise();
  }

  getRecentActivity(username: string): RecentActivity[]
  {
    var activityList= new Array();
    
    this.http.get<[]>(this.rootUrl + "/comment/").toPromise().then((result: Comment[]) => {
      for(let i = 0; i<result.length; i++){
        if (result[i].userName==username){
          let activityToAdd: RecentActivity= {
            id: 0,
            date: null,
            type: "",
            title:""
          }
          activityToAdd.date=result[i].dateTime;
          activityToAdd.id=result[i].id;
          activityToAdd.type="nest";
          activityToAdd.title=result[i].message;
          activityList.push(activityToAdd);
          }
        };
    });
    this.http.get<[]>(this.rootUrl + "/post/").toPromise().then((result: Root[]) => {
      for(let i = 0; i<result.length; i++){
        if (result[i].userName==username){
          let activityToAdd: RecentActivity= {
            id: 0,
            date: null,
            type: "",
            title:""
          }
          activityToAdd.date=result[i].dateTime;
          activityToAdd.id=result[i].id;
          activityToAdd.type="comment";
          activityToAdd.title=result[i].title;
          activityList.push(activityToAdd);
          }
        };
    });
    console.log(activityList);
    return(activityList);
  }
  
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
      console.log(LoC);
    return LoC;
  }

  addCommentToList(Com: Comment, LoC: Comment[], name: string)
  {
    console.log("Got into addCommentToList. Username: " + Com.userName);
    if (Com.comments)
    {
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

  checkFollowingPost(followedPostId: number, currentUser:number): boolean{

    var doesFollow = false;
    this.getFollowedPostByUserId(currentUser).then((result: FollowingPost[]) => {
      let listOfFollowings = result;
      console.log("followedPostId is "+followedPostId+", userID is "+currentUser)
      console.log(listOfFollowings)
      for(let i = 0; i < listOfFollowings.length; i++){
        if (listOfFollowings[i].rootId == followedPostId){
          console.log("returning true")
          doesFollow = true;
        }
      }
    })
    console.log("final decision is: "+doesFollow)
    return doesFollow;
}

  followPost(followedPost: FollowingPost): Promise<FollowingPost> {
    return this.http.post<FollowingPost>(this.apiUrl+"/FollowingPost/", followedPost).toPromise();
  }
  
  unfollowPost(id: number) {
    return this.http.delete<FollowingPost>(this.apiUrl+"/FollowingPost/id/"+id).toPromise();
  }
  
  followUser(follow: Followings): Observable<Followings> {
    return this.http.post<Followings>(this.followUrl, follow);
  }

  unfollowUser(follow: Followings): Observable<Followings> {
    return this.http.delete<Followings>(this.followUrl + "/id/"+ follow.id);
  }
  
}
