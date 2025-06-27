import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripDataService } from '../services/trip-data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Get our token from our Storage provider.
// NOTE: For this application we have decided that we will name
// the key for our token 'travlr-token'
public getToken(): string {
  let out: any;
  out = this.storage.getItem('travlr-token');

  // Make sure we return a string even if we don't have a token
  if (!out) {
    return '';
  }
  return out;
}

// Save our token to our Storage provider.
// NOTE: For this application we have decided that we will name
// the key for our token 'travlr-token'
public saveToken(token: string): void {
  this.storage.setItem('travlr-token', token);
}

// Logout of our application and remove the JWT from Storage
public logout(): void {
  this.storage.removeItem('travlr-token');
}


  // Setup our storage and service access
constructor(
  @Inject(BROWSER_STORAGE) private storage: Storage,
  private tripDataService: TripDataService
) { }

// Variable to handle Authentication Responses
authResp: AuthResponse = new AuthResponse();

}


