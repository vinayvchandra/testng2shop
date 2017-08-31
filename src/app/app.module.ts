import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ListviewComponent } from './listview/listview.component';
import { ListItemComponent } from './listview/list-item/list-item.component';

const appRoutes = [
  {path: "dashboard", component:DashboardComponent},
  {path: "lists", component:ListviewComponent},
  { path: '', component: LoginComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ListviewComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
