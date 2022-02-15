import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-edition-item',
  templateUrl: './task-edition-item.component.html',
  styleUrls: ['./task-edition-item.component.css'],
})
export class TaskEditionItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onEdit(task: Task) {
    this.onEditTask.emit(task);
  }
}
