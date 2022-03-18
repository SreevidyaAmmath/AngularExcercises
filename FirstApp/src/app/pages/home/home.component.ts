import { Component, OnDestroy, OnInit } from '@angular/core';
import { services } from 'src/app/models/services';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
slist:services[]=[];
  constructor(private hs:HomeService) { 
      console.log("Home component instantiated")
  }

  ngOnInit(): void {
    this.hs.getServices().subscribe(
      {
      next: (data:services[])=>this.slist=data,
      error: (error)=>this.slist=[]
      }
    )
  }

  ngOnDestroy(): void {
    console.log("Home component Destroyed")
  }
}
