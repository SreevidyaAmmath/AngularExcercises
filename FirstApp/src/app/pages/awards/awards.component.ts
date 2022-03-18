import { Component, OnInit, ViewChild } from '@angular/core';
import { AwardService } from 'src/app/services/award.service';
import { prize } from 'src/app/models/prize';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  
  year:string[]=[];
  category:string[]=[];
  prizelist:prize[]=[];
  allcategory:string="All";
  allyear:string="All";
  constructor(private as:AwardService) {
       
    
   }
   
   dataSource = new MatTableDataSource(this.prizelist);
   dataSourceWithPageSize = new MatTableDataSource(this.prizelist);
   @ViewChild('paginator')
  paginator!: MatPaginator;
  @ViewChild('paginatorPageSize')
  paginatorPageSize!: MatPaginator;

  ngOnInit(): void {
    debugger;
    
    this.as.getAwards().subscribe({
      next: (data:any)=>{
        this.prizelist=data;
        this.dataSource = new MatTableDataSource(this.prizelist);
        this.dataSourceWithPageSize = new MatTableDataSource(this.prizelist);  
        this.dataSourceWithPageSize.paginator = this.paginatorPageSize; 
        this.dataSource.paginator = this.paginator;  
        this.year.push("All");
        this.category.push("All");
        this.prizelist.forEach(element => {
          if(!this.year.includes(element.year))          
          this.year.push(element.year);
          if(!this.category.includes(element.category)) 
          this.category.push(element.category);
        }); 
      },
      error: (error:any)=> this.prizelist=[]
    })
    
  }
  
  
    displayedColumns: string[] = ['year', 'category','laureates'];   
  
}
