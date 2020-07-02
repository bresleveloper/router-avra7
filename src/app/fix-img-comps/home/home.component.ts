import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public activeRoute:ActivatedRoute, 
    public router:Router,
    //public outlet:RouterOutlet

  ) { }

  paragraphContent:string

  ngOnInit(): void {
    /*this.activeRoute.data.subscribe(data =>{
      console.log(data);
      this.paragraphContent = data.data
      
    })*/

    this.router.events.subscribe(ev =>{
      if (ev instanceof NavigationEnd) {
        console.log(this.activeRoute);
        console.log(this.activeRoute.firstChild.snapshot.data);
        this.paragraphContent = this.activeRoute.firstChild.snapshot.data.pcontent
      }
    })
    //this.outlet.activatedRouteData['data']
  }

}
