import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {

  fname:any;
  lname:any;
  email:any;
  company:any;
  message:any;
  errors:string[]=[];
  lang:string="english";

  constructor(private hs:HomeService,private ts:TranslateService) {
      this.ts.use(this.lang)
   }

  ngOnInit(): void {
  }

  setLang(){
    this.ts.use(this.lang)
  }

  submit(){
      
    this.errors = []
   
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First name should be greatr than 3 characters")
    if(this.lname==undefined || this.lname.length<3)
      this.errors.push("Lastname name should be greate than 3 characters")
    if(this.email==undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")
    if(this.company==undefined || this.company.length<3)
      this.errors.push("Company name should be greate than 3 characters")
    if(this.message==undefined || this.message.length<30)
      this.errors.push("Message should be greate than 30 characters")

      if(this.errors.length==0){
        let obj={
          id: Math.round(Math.random()*1000),
          lname: this.lname,
          fname: this.fname,
          email: this.email,
          company: this.company,
          message: this.message
        }
        this.hs.postEnquiry(obj).subscribe({
          next: ()=>{
            alert("You enquiry is posted")
            this.fname="",
            this.lname="",
            this.email="",
            this.message="",
            this.company=""
          },
          error: ()=>alert("there is a problem posting your equiry")
        }
        )

      }

  }

  
}