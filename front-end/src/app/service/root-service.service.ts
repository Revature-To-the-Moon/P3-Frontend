import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root } from '../models/root';
import { Comment } from '../models/Comment';
import { Vote } from '../models/vote';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  private rootUrl: string = "https://52.141.211.229/post/api/post";
  private rootUrl_1: string = "https://52.141.211.229/post/api/Comment";
  private rootUrl_2: string = "https://52.141.211.229/post/api/Vote";

  constructor(private http: HttpClient) { }

  addRoot(root: Root): Promise<Root> {
    return this.http.post<Root>(this.rootUrl, root).toPromise();
  }

  updateRoot(root: Root): Promise<Root> {
    return this.http.put<Root>(this.rootUrl + "/" + root.id, root).toPromise();
  }

  addComment(comment: Comment): Promise<Comment> {
    return this.http.post<Comment>(this.rootUrl_1, comment).toPromise();
  }
  getCommentById(id: number): Promise<Comment>{
    return this.http.get<Comment>(this.rootUrl_1 + '/' + id).toPromise();
  }
  

  getAllVotes(): Promise<Vote[]> {
    return this.http.get<Vote[]>(this.rootUrl_2).toPromise();
  }
  addVote(vote: Vote): Promise<Vote>{
    return this.http.post<Vote>(this.rootUrl_2, vote).toPromise();
  }
  updateVote(vote: Vote): Promise<Vote> {
    return this.http.put<Vote>(this.rootUrl_2 + "/" + vote.id, vote).toPromise();
  }
  deleteVote(id: number): Promise<void> {
    return this.http.delete<void>(this.rootUrl_2 + "/" + id).toPromise();
  }

  getAllRoots(): Promise<Root[]> {
    return this.http.get<Root[]>(this.rootUrl).toPromise();
  }

  getRootById(id: number): Promise<Root> {
    return this.http.get<Root>(this.rootUrl + '/' + id).toPromise();
  }

}
