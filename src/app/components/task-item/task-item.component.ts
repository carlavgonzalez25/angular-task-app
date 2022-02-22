import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask: EventEmitter<number> = new EventEmitter();

  faTimes = faTimes;
  faPen = faPen;
  faCheck = faCheck;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  onEdit(task: Task) {
    this.onEditTask.emit(task.id);
  }

  hasId(id: any) {
    return this.taskService.getEditionId() === id;
  }

  onHandleEdit(task: Task) {
    this.taskService.editTask(task).subscribe();
    this.onEditTask.emit(undefined);
  }
}
