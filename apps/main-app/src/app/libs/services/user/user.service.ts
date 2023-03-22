import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../state-management/user/user.state';

@Injectable({ providedIn: 'root' })
export class UserService {
   constructor(private readonly http: HttpClient) {}
   getUser = () => this.http.get<User>('/api/user/getUserInfo');
}
