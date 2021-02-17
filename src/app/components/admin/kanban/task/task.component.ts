import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import {Task} from '../task/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  // tslint:disable-next-line: no-unused-expression
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
