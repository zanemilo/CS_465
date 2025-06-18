import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip'; // Ensure this import matches your model definition

@Injectable({
  providedIn: 'root'
})


export class TripDataService {

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
}
