import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo?: Todo;

  isEditing: boolean = false;

  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter<Todo>();
  @Output() changeDoneTodo = new EventEmitter<Todo>();

  onEditTask() {
    this.editTask.emit(this.todo);
  }

  onDeleteTask() {
    console.log(this.todo?.id);
    this.deleteTask.emit(this.todo?.id);
  }

  onChangeDoneTodo() {
    this.changeDoneTodo.emit(this.todo);
  }

  changeIsEditing() {
    this.isEditing = !this.isEditing;
  }
}
