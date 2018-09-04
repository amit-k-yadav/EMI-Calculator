import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { BikeModels } from '../bikes';
import { Bike } from '../bike';
import { JAN } from '@angular/material';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  mobileNumber =  new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  bikeModels = BikeModels;
  selectedModelPrice: number;
  loanAmount: number;
  downPayment: number;
  invalidPayment = false;
  rateOfIneterest:number;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  model: any = {};

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  // lineChart
  lineChartData= [];

  
  lineChartLabels = ['1','2','3','4','5'];
  lineChartType:string = 'line';
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'email can not be empty' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getMobileErrorMessage() {
    return this.mobileNumber.hasError('required') ? 'Mobile number can not be empty' : '';
  }

  getNameErrorMessage(){
    return this.name.hasError('required') ? 'Name Can not be empty' : '';
  }

  downPaymentEntered(downPayment)  {
    this.downPayment = Number(downPayment);
    if (this.downPayment >= 0){
      this.loanAmount = this.selectedModelPrice - this.downPayment;
    }else{
      this.loanAmount = undefined;
    }
  }

  calculateTotalAmount(rateOfIneterest){
    this.selectedModelPrice = this.selectedModelPrice ? this.selectedModelPrice : 0;
    this.downPayment = this.downPayment ? this.downPayment : 0;
    this.loanAmount = this.loanAmount ? this.loanAmount : 0;
    console.log(this.selectedModelPrice)
    console.log(this.downPayment)
    console.log(this.loanAmount)
    this.rateOfIneterest = rateOfIneterest;
    this.lineChartData = []
    for (let index = 1; index < 6; index++) {
      this.lineChartData.push(this.loanAmount + (index*(this.rateOfIneterest*this.loanAmount))/100);
    }
    console.log("calculated again")
    console.log(this.lineChartData)
  }

  showChart(){
    document.getElementById("chart").style.display = "block";
  }
  
}
