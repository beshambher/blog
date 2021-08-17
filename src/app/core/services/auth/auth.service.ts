import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  fetchUser() {
    return this.http.get('/auth/session/user').subscribe(response => {
      localStorage.setItem('session', JSON.stringify(response));
    }, error => {
      localStorage.removeItem('session');
    });
  }
  
  getUser() {
    return JSON.parse(localStorage.getItem('session')+'');
  }

  get isLoggedIn(): boolean {
    return this.getUser() ? true : false;
  }

  get username(): boolean {
    return this.getUser() ? this.getUser().name : '';
  }

  logout() {
    this.http.post('/auth/logout', {}).subscribe(response => {
      alert(response)
      localStorage.clear();
    });
  }
}
