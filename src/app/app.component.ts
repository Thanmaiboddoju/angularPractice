import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  homepage:boolean = true;

  title = 'angular_practice';
  parentMsg : string = "Parent msg from app component";
  childMsg !: string[];
  childMsg2 !: string[];

  @ViewChild(PostComponent) vacancyPosts : any;
  ngAfterViewInit(): void {
    this.childMsg = this.vacancyPosts.vacantPosts;
  }
  constructor(){
    // this.childMsg = []
    // this.childMsg2=[]
  }

  receivemessage($event:any){
    console.log($event , "here");
    this.childMsg2 = $event
  }

  homebutton(){
    console.log("Clicked",this.homepage)
    this.homepage = !this.homepage
  }
  

}
