import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAuthorizationToken(): string {
    const url = `fake-jwt-token`;
    return url;
  }
}