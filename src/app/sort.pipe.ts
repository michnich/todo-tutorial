import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<Task>, sort="none"): Array<Task> {
    if (sort === "due") {
      value.sort(function(a,b) { //sort function expects number value return
        return (a.date > b.date) ? 1:-1;
      })
      return value;
    }
    else if (sort === "alphabetical") {
      value.sort(function(a,b) { //sort function expects number value return
        return (a.title.charAt(0).toUpperCase() > b.title.charAt(0).toUpperCase()) ? 1:-1;
      })
      return value;
    }
    else if (sort === "created") {
      value.sort(function(a,b) { //sort function expects number value return
        return (a.createdAt > b.createdAt) ? 1:-1;
      })
      return value;
    }
    else {
      return value;
    }
  }
}
