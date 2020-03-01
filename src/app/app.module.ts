import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';
//import { List4Component } from './list4/list4.component';
import { IntakeListComponent } from './intake-list/intake-list.component';
import { List5Component } from './list5/list5.component';
import { List6Component } from './list6/list6.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    List2Component,
    List3Component,
//    List4Component,
    IntakeListComponent,
    List5Component,
    List6Component
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
