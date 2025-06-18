import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trips } from '../data/trips';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {
  trips = trips;

  constructor() { }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

}
