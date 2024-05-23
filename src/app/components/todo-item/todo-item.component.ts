import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo?: Todo;

  @Output() deleteTask = new EventEmitter<number>();


  editTask() {}

  onDeleteTask() {
    console.log(this.todo?.id)
    this.deleteTask.emit(this.todo?.id);
  }

  checkTask(id?: number) {}
}
