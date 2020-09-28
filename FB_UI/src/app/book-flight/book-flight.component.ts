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
 loading:boolean = false;
  errorMessage: String;
  successMessage: String;

  constructor(private fb: FormBuilder, private bookFlightService: BookFlightService) { }

  bookingForm = this.fb.group({
    passengerName: ['',[Validators.required]],
    noOfTickets: ['',[Validators.required,Validators.minLength(1)]],
    flightId: ['',[Validators.required,Validators.pattern(/[A-Z]{3}-[0-9]{3}/)]]
  })

  ngOnInit() {}



  book() {
    this.loading = true;
    this.successMessage = null;
    this.errorMessage = null;
    // Code the method here
    this.bookFlightService.getData(this.bookingForm.value).subscribe((res) => {
      this.successMessage = res['message'];
    this.loading = false;

    },err => {
      this.errorMessage = err.error.message;
    this.loading = false;

    })
  }
}

function validateFlight(c: FormControl) {
 /* 
    Code the validator here
    Use flightError as the property
*/

}


