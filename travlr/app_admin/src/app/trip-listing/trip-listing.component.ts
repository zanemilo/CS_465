import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';
import { TripCardComponent } from '../trip-card/trip-card.component';

import { Trip } from '../models/trip'; // Import the Trip interface if needed
import { TripDataService } from '../services/trip-data.service'; // Import the service if you plan to use it

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

  constructor(private tripDataService: TripDataService) { 
    console.log('trip-listing constructor');
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
        console.log('Error: ' + error);
      }
    })
  }


  ngOnInit(): void {
    console.log('trip-listing ngOnInit');
    this.getStuff();
  }

}
