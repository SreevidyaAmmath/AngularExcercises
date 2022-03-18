import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { prize } from '../models/prize';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(flist: MatTableDataSource<prize>, category: string): any {
    if (category=="All")
        return flist;
    else
    {
      var x= flist.paginator;
       var y= new MatTableDataSource (flist.data.filter((x:prize)=>x.category===category));
       y.paginator=x;
        return y;
    }
       
  }

}
