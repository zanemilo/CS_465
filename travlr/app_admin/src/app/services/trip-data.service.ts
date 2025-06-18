import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip'; // Ensure this import matches your model definition

@Injectable({
  providedIn: 'root'
})


export class TripDataService {

  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
    let url = 'http://localhost:3000/api/trips';

    return this.http.get<Trip[]>(url);
  }
}
