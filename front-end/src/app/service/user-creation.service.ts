import { Injectable } from '@angular/core';
import { users } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserCreationService {
  username?: string;
  
  constructor() { }
  
}
