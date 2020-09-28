import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { BookFlightService } from "./book-flight.service";

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  providers: [BookFlightService]
})
export class BookFlightComponent implements OnInit {

  errorMessage: String;
  successMessage: String;

  constructor(private fb: FormBuilder, private bookFlightService: BookFlightService) { }

  bookingForm = this.fb.group({
    passengerName: [],
    noOfTickets: [],
    flightId: []
  })

  ngOnInit() {}



  book() {
    // Code the method here
  }
}

function validateFlight(c: FormControl) {
 /* 
    Code the validator here
    Use flightError as the property
*/

}


