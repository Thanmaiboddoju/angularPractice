import { Component } from "@angular/core";
import { AppComponent } from "../app.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private routers:Router){}
  obj:AppComponent = new AppComponent();
  homebutton(){
    this.obj.homebutton()
  }
  routechange(){
    this.routers.navigate(['/detailForm'])
    // this.routers.navigate(['/pipes',9,'pipeparam2'],{queryParams:{pageno:1,perPage:10}})

  }
}