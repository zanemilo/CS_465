import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { AuthenticationService } from '../services/authentication.service'; // Import the authentication service if needed


import { Trip } from '../models/trip'; // Import the Trip interface if needed
import { TripDataService } from '../services/trip-data.service'; // Import the service if you plan to use it

import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {
  trips!: Trip[]; // Declare trips as an array of Trip interface
  message: string = 'Loading trips...'; // Message to display while loading

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private authenticationService: AuthenticationService // Inject the authentication service
    ) { 
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  

  private getStuff(): void {
    this.tripDataService.getTrips()
    .subscribe({
      next: (value: any) => {
        this.trips = value;
        if(value.length > 0) 
        { 
          this.message = 'There are '+ value.length + ' trips available.';
        }
        else{
          this.message = 'There were no trips retrieved from the database.';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.error('Error Loading Trips: ' + error);
        console.log('Error details:', JSON.stringify(error, null, 2));
      }
    })
  }



  ngOnInit(): void {
    console.log('trip-listing ngOnInit');
    this.getStuff();
  }

   public isLoggedIn() {
  return this.authenticationService.isLoggedIn();
}

}
