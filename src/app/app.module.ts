import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpService } from  './emp.service';
import { EmpComponent } from './emp/emp.component';
import { HttpClientModule } from '@angular/common/http';
import { Emp2Component } from './emp2/emp2.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    Emp2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
