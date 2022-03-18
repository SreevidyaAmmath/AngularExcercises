import { Pipe, PipeTransform } from '@angular/core';
import { feedback } from '../models/feedback';

@Pipe({
  name: 'feedfilter'
})
export class FeedfilterPipe implements PipeTransform {

  transform(flist: feedback[], type: string): any {
    if (type=="All")
        return flist;
    else
        return flist.filter((x:feedback)=>x.type===type)
  }

}
