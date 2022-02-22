import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-task-edition-item',
  templateUrl: './task-edition-item.component.html',
  styleUrls: ['./task-edition-item.component.css'],
})
export class TaskEditionItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
  @Output() onCleanEdit: EventEmitter<any> = new EventEmitter();
  @Output() onReloadTasks: EventEmitter<boolean> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  id?: number;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.text = this.task.text;
    this.day = this.task.day;
    this.reminder = this.task.reminder;
    this.id = this.task.id;
  }

  onSubmit() {
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
      id: this.id,
    };
    this.onEditTask.emit(newTask);
    this.taskService.setEditionId(undefined);
    this.onReloadTasks.emit(true);
  }
}
