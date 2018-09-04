import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { BikeModels } from '../bikes';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-emi-form',
  templateUrl: './emi-form.component.html',
  styleUrls: ['./emi-form.component.css']
})
export class EmiFormComponent implements OnInit {
  
  model= {};
  mobileNumber =  new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  downPayment = new FormControl('', [Validators.required]);
  ROI = new FormControl('', [Validators.required]);
  tenureControl = new FormControl('', [Validators.required]);
  bikeModels = BikeModels;
  selectedModelPrice: number;
  loanAmount: number;
  invalidPayment = false;
  rateOfIneterest:number;
  bikeDp: number;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.formGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  // lineChart
  lineChartData= [];

  
  lineChartLabels = ['1','2','3','4','5'];
  lineChartType:string = 'line';

  getNameErrorMessage(){
    return this.name.hasError('required') ? 'Name Can not be empty' : '';
  }

  downPaymentEntered(downPayment=this.bikeDp)  {
    this.bikeDp = downPayment;
    this.loanAmount = this.selectedModelPrice - this.bikeDp;
  }

  bikeSelected(bike){
    this.selectedModelPrice = bike.price;
    this.model['selectedModelName'] = bike.model;
  }
  

  showChart(){
    document.getElementById("chart").style.display = "block";
    document.getElementById("confirmButton").style.display = "block";
  }


  calculateTotalAmount(rateOfIneterest = this.rateOfIneterest){
    this.selectedModelPrice = this.selectedModelPrice ? this.selectedModelPrice : 0;
    this.bikeDp = this.bikeDp ? this.bikeDp : 0;
    this.loanAmount = this.selectedModelPrice - this.bikeDp;
    this.rateOfIneterest = rateOfIneterest ? rateOfIneterest : 0;
    this.model['loanAmount'] = this.loanAmount;
    console.log(this.selectedModelPrice)
    console.log(this.bikeDp)
    console.log(this.loanAmount)  
    console.log(this.rateOfIneterest)
    this.lineChartData = []
    for (let index = 1; index < 6; index++) {
      this.lineChartData.push(this.loanAmount + (index*(this.rateOfIneterest*this.loanAmount))/100);
    }
    console.log("Calculated")
    console.log(this.lineChartData)
  }

  onSubmit() {
    console.log("Submit")
  }

  goForward(stepper: MatStepper){
    if(this.model['name'] && this.model['mobileNumber'] && this.model['email'] && this.model['selectedModelName'] &&
        this.model['selectedModelPrice'] && this.model['downPayment'] && this.model['loanAmount']
        && this.model['roi'] && this.model['tenure']){
      stepper.next();
    }
  }

  goBack(stepper: MatStepper){
    stepper.previous();
  }
}
