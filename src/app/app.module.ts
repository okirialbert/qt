import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintingComponent } from "./printing/printing.component";
import { ProcedureComponent } from "./procedure/procedure.component";
import { DurationComponent } from "./duration/duration.component";
import { FeeComponent } from "./fee/fee.component";
import { MarketingComponent } from "./marketing/marketing.component";

@NgModule({
  declarations: [
    AppComponent,
    ProcedureComponent,
    DurationComponent,
    FeeComponent,
    MarketingComponent,
    PrintingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
