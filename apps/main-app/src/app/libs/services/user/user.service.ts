import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Language } from '../../shared/types';
import { AppTheme } from '../../state-management';
import { User } from '../../state-management/user/user.state';

@Injectable({ providedIn: 'root' })
export class UserService {
   constructor(private readonly http: HttpClient) {}
   getUser = (language: Language, theme: AppTheme) =>
      this.http.post<User>('/api/user/getUserInfo', {
         theme,
         language,
      });
}
