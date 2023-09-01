import { Component, Input,Output,EventEmitter } from '@angular/core';
import {EmployeeDetails} from "../Services/post.service"
import {Exampleinterface} from "../models/exampleinterface"
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // providers:[EmployeeDetails]
})

export class PostComponent {
  title: string = 'List of posts available';
  vacantPosts: string[] = [
    'Fullstack developer',
    'Devops engineer',
    'IOT developer',
    `Customer support  / Help Desk`,
  ];
  imagePath:string = 'https://www.superprof.co.in/images/teachers/teacher-home-student-engineering-wants-share-and-explore-her-knowledge-others-she-giving-tutions-programming-languages-like.jpg';
  userId !: string ;
  employeeDetails : any[] = [
    {
    id:572,name:"thanmai"
  },
  {
    id:573,name:"unknown"
  },
  {
    id:574,name:"vidya"
  }]
  newemployeename!:string;
  newemployeeId!:number;
  switchfavoriteSeason!:string;
  newEmployeeDetailsList!:Array<any>
  newemployeename2!:any;
  newemployeeguide!:any;
  newemployeedept!:any;
  @Input()
  parentMsg!: string;
  constructor(private EmployeeDetailsObj:EmployeeDetails) {
    // let obj = new EmployeeDetails
    this.newEmployeeDetailsList =  EmployeeDetailsObj.newEmployeeDetails;
  }

  @Output() messageEvent =new  EventEmitter<string[]>();

  showDetails(){
    console.log("clicked button to send message")
    this.messageEvent.emit(this.vacantPosts)
  }

  keyupFunction($event:any){
    if($event.key=="Enter")
    console.log("stopped typing",$event)
  }

  keyenter(value:any){
    console.log("Enter key",value)
  }

  two_way_binded(){
    console.log("userid entered is ",this.userId)
  }
 

  addEmployee(id:number,name:string){
    this.employeeDetails.push({"id":id,"name":name});
  }

  addNewEmployee(name:string,dept:string,guide:string){
    let obj : Exampleinterface={name:name,dept:dept,guide:guide};
    console.log(obj)
    this.EmployeeDetailsObj.addEmployee(obj)
    this.EmployeeDetailsObj.addEmployee({...obj,doj:new Date()})

  }

  removeEmployee(ind:number){
    this.employeeDetails.splice(ind,1)
  }

  setFavoriteSeason ( season:string){
    this.switchfavoriteSeason=season;
  }
}
