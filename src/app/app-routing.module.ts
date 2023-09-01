import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { PipesTaskComponent } from './pipes-task/pipes-task.component';
import { Task2Component } from './task2/task2.component';
// import {app404} from 

const routes: Routes = [
  {
    path:'pipes/:id/:param2',component:PipesTaskComponent
  },
  {
    path:'postForm',component:Task2Component
  },
  {
    // wildcard/404 router
    // must be displayed at bottom of all the routes to avoid it in all pages
    // path:"**",component:app404
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
