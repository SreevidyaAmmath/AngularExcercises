import { Component, OnInit, Input } from '@angular/core';
import { feedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-feedback-box',
  templateUrl: './feedback-box.component.html',
  styleUrls: ['./feedback-box.component.css']
})
export class FeedbackBoxComponent implements OnInit {
  @Input("feedback") current:feedback={id:0,name:"",email:"",type:"",message:""};
  constructor() { }

  ngOnInit(): void {
  }

}
