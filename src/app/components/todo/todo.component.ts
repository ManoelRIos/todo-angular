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

  ngOnInit() {
    const localTasks = localStorage.getItem('tasks');
    if (localTasks) {
      this.tasks = JSON.parse(localTasks);
    }
  }

  addTask(task: string) {
    this.tasks?.push({
      id: Math.floor(Math.random() * 10000),
      task: task,
      done: false,
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  editTask(todo: Todo) {
    console.log(todo);
    const index = this.tasks.findIndex((task) => task.id === todo.id);
    if (index !== -1) {
      this.tasks[index].task = todo.task;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  changeDoneTodo(todo: Todo) {
    debugger
    console.log(todo);
    const index = this.tasks.findIndex((task) => task.id === todo.id);
    if (index !== -1) {
      this.tasks[index].done = !todo.done;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
