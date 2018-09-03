import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { BikeModels } from '../bikes';
import { Bike } from '../bike';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  mobileNumber =  new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  bikeModels = BikeModels;
  selectedModelPrice: number;
  loanAmount: number;
  downPayment: number;
  invalidPayment = false;
  rateOfIneterest:number;

  constructor() { }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getMobileErrorMessage() {
    return this.mobileNumber.hasError('required') ? 'You must enter a value' : '';
  }

  downPaymentEntered(downPayment)  {
    this.downPayment = Number(downPayment);
    if (this.downPayment >= 0){
      this.loanAmount = this.selectedModelPrice - this.downPayment;
    }else{
      this.loanAmount = undefined;
    }
  }

  selectedROI(rateOfIneterest){
    this.rateOfIneterest = rateOfIneterest;
  }
}
