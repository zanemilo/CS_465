import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';

import { Trip } from '../models/trip'; // Ensure this import matches your model definition

@Injectable({
  providedIn: 'root'
})


export class TripDataService {
  private baseUrl = '/api';
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/trips';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  // This will satisfy the binding for the add-trip component 
  // but it will not get us anywhere
  // because we still need to add the HTML code to generate the form, 
  // and we need to build the
  // back-end API method to accept the posted form data.
  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    // console.log("Inside TripDataService::getTrips");
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    // console.log("Inside TripDataService::addTrips");
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

  public login(user: User, passwd: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.baseUrl}/login`,
      { email: user.email, password: passwd }
    );
  }

  public register(user: User, passwd: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${this.baseUrl}/register`,
      { email: user.email, name: user.name, password: passwd }
    );
  }
}
