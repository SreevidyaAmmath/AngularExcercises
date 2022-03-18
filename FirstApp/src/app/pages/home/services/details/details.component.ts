import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { details } from 'src/app/models/details';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:number=0;
  record:details={id:0,title:"",description:[]};
  constructor(private route:ActivatedRoute,private hs:HomeService) {
     this.route.params.subscribe(params=> {
         this.id=params["id"]
         this.hs.getDetails(this.id).subscribe({
           next:(x:details)=>{this.record=x},
           error:(error:any)=>this.record={id:0,title:"",description:[]}
         })

     })
   }

  ngOnInit(): void {
  }

}
