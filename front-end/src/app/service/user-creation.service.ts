import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserCreationService {
  userName?: string;

  user: User = {
    username: ''
  };

  constructor(private http: HttpClient) { }

  apiUrl = 'https://52.141.211.229/user/api';

  getAllUser(): Promise<User[]>
  {
    return this.http.get<[]>(this.apiUrl + '/user').toPromise();
  }
}
