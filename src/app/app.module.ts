import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NavbarComponent} from "./navbar/navbar.component";
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { Task2Component } from './task2/task2.component';
import { PipesTaskComponent } from './pipes-task/pipes-task.component'
import {YearPipe} from "./pipes-task/append-pipe";
import { BranchPipe } from './pipes-task/branch.pipe'
import {EmployeeDetails} from './Services/post.service';
import { Task3FormsComponent } from './task3-forms/task3-forms.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostlistComponent,
    Task2Component,
    PipesTaskComponent,
    YearPipe,
    BranchPipe,
    Task3FormsComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'detailForm',component:Task3FormsComponent
      },
      
    ]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [EmployeeDetails],
  bootstrap: [AppComponent]
})
export class AppModule { }
