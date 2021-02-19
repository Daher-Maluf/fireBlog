import { Component, Input,Output, EventEmitter } from '@angular/core';

import {Task} from '../task/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  {
  @Input() task: Task;
  // tslint:disable-next-line: no-unused-expression
  @Output() edit = new EventEmitter<Task>();

  constructor() { }

 

}
