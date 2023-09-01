import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes-task',
  templateUrl: './pipes-task.component.html',
  styleUrls: ['./pipes-task.component.css']
})
export class PipesTaskComponent implements OnInit{
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    // subscribe method is used to call function observable instead of in newline
    let obs = new Observable(observe => {
      console.log("printed from observable",observe)
      // to return in observable we use next fun
      // to capture returned value we use subscribe fun
      observe.next("returned from observer")
      observe.next("returned from observer 2")
      // observer can return more than once unlike java script fun
      // observer can work both synchronously and asynchronously(incases like timeout)
      // js only works asynchronously
    }).subscribe(value => {
      console.log("returned to subscribe",value)
    })
    obs.unsubscribe()
    this.route.paramMap.subscribe(value => {
      console.log("param from route",value.get('id'),value.get('param2'))

    })
    this.route.queryParamMap.subscribe(value =>{
      console.log(value.get('pageno'),value.get('perPage'),"query params are optional and wont be validated though passed or not")
    })
  }
  title:string = "Pipes practice";
  likes:number = 100000;
  cost:number = 81.95678;
  date_today:Date = new Date();
  pipes_available:string[] = ["date","currency","percent","json","uppercase","lowercase","splice","number"]
}
