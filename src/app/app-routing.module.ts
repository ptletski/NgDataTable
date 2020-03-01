import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';
//import { List4Component } from './list4/list4.component';
import { IntakeListComponent } from './intake-list/intake-list.component';
import { List5Component } from './list5/list5.component';
import { List6Component } from './list6/list6.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent },
  {path: 'list2', component: List2Component},
  {path: 'list3', component: List3Component},
//  {path: 'list4', component: List4Component},
  {path: 'intake-list', component: IntakeListComponent},
  {path: 'list5', component: List5Component},
  {path: 'list6', component: List6Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
