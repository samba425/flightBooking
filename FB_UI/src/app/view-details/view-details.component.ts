import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormsModule } from '@angular/forms';
import { ViewDetailsService } from "./view-details.service";
import { FlightBooking } from '../shared/FlightBooking';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
  providers: [ViewDetailsService]
})
export class ViewDetailsComponent implements OnInit {
  flightDetails : FlightBooking[];
  successMessage:string;
  errorMessage:string;
  loading: boolean = false;
  

  constructor(private viewDetails: ViewDetailsService) {

   }

  ngOnInit() {
    this.view();
}

  view() {
    this.loading =true;
    this.successMessage = null;
    this.errorMessage = null;
     this.viewDetails.view().subscribe((details) => {
      this.flightDetails = details;
      this.loading =false;
    },err => {
      this.errorMessage = err.error.message;
      this.loading =false;
    });    
  }

  delete(id) {
    this.successMessage = null;
    this.errorMessage = null;
    this.loading =true;
    this.viewDetails.delete(id).subscribe((res) => {
      let index = this.flightDetails.findIndex((i) => i['bookingId'] === id);
      if(index >= 0) {
        this.flightDetails.splice(index,1);
      }
      this.successMessage = res.message;
      this.loading =false;
    },err => {
      this.errorMessage = err.error.message;
      this.loading =false;
    });
  }

}

