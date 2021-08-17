import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private authService: AuthService) { }

  init() {
    return this.authService.fetchUser();
  }

}

export function initializeApp(appInitService: AppInitService) { 
  return () => appInitService.init();
}
