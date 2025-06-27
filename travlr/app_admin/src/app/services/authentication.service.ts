import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripDataService } from '../services/trip-data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // Setup our storage and service access
constructor(
  @Inject(BROWSER_STORAGE) private storage: Storage,
  private tripDataService: TripDataService
) { }

// Variable to handle Authentication Responses
authResp: AuthResponse = new AuthResponse();

}
