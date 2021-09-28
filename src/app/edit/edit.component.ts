import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { Task } from '../task';
import { TaskService } from './../task.service';
import { getCurrentTask } from './../state/tasks.selector';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  task!:Task;
  //format for ngbootstrap datepicker
  formattedDate = {year: 0, month: 0, day: 0}

  faCalendar = faCalendar;

  constructor(private route: ActivatedRoute, 
    private store: Store, private service: TaskService, 
    private router: Router) {}

  ngOnInit(): void {
    this.store.pipe(select(getCurrentTask)).subscribe(state => {
      this.task = {...state};
      let tempDate = state.date;
      //converts to object used by ngbootstraps datepicker {year, month, day}
      this.formattedDate =  {year: tempDate.getFullYear(), month: tempDate.getMonth() + 1, day: tempDate.getDate()}
    });
  }

  submit(form: NgForm) {
    //convert the ngbootstrap datepicker format to a js date
    this.task.date = new Date(this.formattedDate.year, this.formattedDate.month - 1, this.formattedDate.day);
    //pass task to service (will update state)
    this.service.editTask(this.task);
    //navigate back to the task list
    this.router.navigate(['/']);
  }
}
