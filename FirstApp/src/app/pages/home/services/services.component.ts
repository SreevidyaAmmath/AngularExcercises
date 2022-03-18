import { Component, Input, OnInit } from '@angular/core';
import { services } from 'src/app/models/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
@Input('service') current:services={id:0,title:"",description:"",image:""};
  constructor() { }

  ngOnInit(): void {
  }

}
