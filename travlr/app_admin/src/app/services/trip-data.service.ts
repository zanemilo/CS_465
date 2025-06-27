import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';
import { BROWSER_STORAGE } from '../storage';

import { Trip } from '../models/trip'; // Ensure this import matches your model definition

@Injectable({
  providedIn: 'root'
})


export class TripDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage

  ) { }
  baseUrl = 'http://localhost:3000/api';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl);
  }

  // This will satisfy the binding for the add-trip component 
  // but it will not get us anywhere
  // because we still need to add the HTML code to generate the form, 
  // and we need to build the
  // back-end API method to accept the posted form data.
  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.baseUrl, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    // console.log("Inside TripDataService::getTrips");
    return this.http.get<Trip[]>(this.baseUrl + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    // console.log("Inside TripDataService::addTrips");
    return this.http.put<Trip>(this.baseUrl + '/' + formData.code, formData);
  }

  // Call to our /login endpoint, returns JWT
login(user: User, passwd: string) : Observable<AuthResponse> {
  // console.log('Inside TripDataService::login');
  return this.handleAuthAPICall('login', user, passwd);
}

// Call to our /register endpoint, creates user and returns JWT
register(user: User, passwd: string) : Observable<AuthResponse> {
  // console.log('Inside TripDataService::register');
  return this.handleAuthAPICall('register', user, passwd);
}

// helper method to process both login and register methods
handleAuthAPICall(endpoint: string, user: User, passwd: string) : Observable<AuthResponse> {
  // console.log('Inside TripDataService::handleAuthAPICall');
  let formData = {
    name: user.name,
    email: user.email,
    password: passwd
  };

  return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData);
}

}
