import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { post } from '../models/post';
import { users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  private rootUrl: string = 'https://tothemoon.azurewebsites.net/api/post';

  constructor(private http: HttpClient) { }

  addRoot(post: post): Promise<post>
  {
    return this.http.post<post>(this.rootUrl, post).toPromise();
  }

  getAllRoots(): Promise<post[]>
  {
    return this.http.get<post[]>(this.rootUrl).toPromise();
  }

  getRootById(id: number): Promise<post>
  {
    return this.http.get<post>(this.rootUrl+ '/'+ id).toPromise();
  }

}
