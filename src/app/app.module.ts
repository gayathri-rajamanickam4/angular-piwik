import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrugComponent } from './drug/drug.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2Piwik } from 'angulartics2/piwik';


@NgModule({
  declarations: [
    AppComponent,
    DrugComponent,
    HomeComponent,
    PatientComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // added to imports
     Angulartics2Module.forRoot([Angulartics2Piwik]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
