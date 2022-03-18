import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { prize } from '../models/prize';

@Pipe({
  name: 'awardFilter'
})
export class AwardFilterPipe implements PipeTransform {

  transform(flist: MatTableDataSource<prize>, year: string): any {
    if (year=="All")
        return flist;
    else
    {
       var x= flist.paginator
       var y= new MatTableDataSource (flist.data.filter((x:prize)=>x.year===year))
       y.paginator=x;
        return y;
    }
  }

}
MatTableDataSource