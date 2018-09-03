import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { EmiComponent } from './emi/emi.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule} from '@angular/material';
import {MatSliderModule, MatSlider} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    EmiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
