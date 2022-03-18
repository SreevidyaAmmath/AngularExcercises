import { Component, Input, OnInit } from '@angular/core';
import { contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-box',
  templateUrl: './contact-box.component.html',
  styleUrls: ['./contact-box.component.css']
})
export class ContactBoxComponent implements OnInit {
@Input('contact') current:contact={title:"",address:"",city:"",pin:"",image:""};

  constructor() { }

  ngOnInit(): void {
  }

}
