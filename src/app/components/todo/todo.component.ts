import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor, NgIf } from '@angular/common';
import { Todo } from '../../models/todo';
import { TodoCardComponent } from '../todo-card/todo-card.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  imports: [NgFor, NgIf, InputComponent, TodoItemComponent, TodoCardComponent],
})
export class TodoComponent {
  tasks: Todo[] = [];

  @Input() onAddTask?: EventEmitter<Todo>;
  @Input() onDeleteTask?: EventEmitter<number>;

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  addTask(task: string) {
    this.tasks?.push({
      id: Math.floor(Math.random() * 10000),
      task: task,
      done: false,
    });
  }
}
