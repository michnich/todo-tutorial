import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})

export class AddComponent implements OnInit {
  //form binding
  task = {"title": "", "date": {year: 0, month: 0, day: 0}}

  //font awesome icons
  faCalendar = faCalendar;

  //success message displays after form submission
  showMessage = false;

  constructor(private store: Store<TaskState>, private location: Location, private service: TaskService) {}

  ngOnInit(): void {}

  //triggered by form submission
  //calls service function to add task (service will update state)
  addTask(form: NgForm) {
    this.service.addTask(this.task.title, new Date(this.task.date.year, this.task.date.month - 1, this.task.date.day))
    this.showMessage = true;
    form.reset();
  }

  back() {
    this.location.back();
  }

  //generates a random string to simulate an db generated id
  generateId(): string {
    let result = '';
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  close() {
    this.showMessage = false;
  }
}