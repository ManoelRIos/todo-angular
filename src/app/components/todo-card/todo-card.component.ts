import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  @Input() tasks: Todo[] = [];

  totalDoneTasks: number = this.tasks.filter((task) => task.done == true)
    .length;
  totalUndoneTasks: number = this.tasks.filter((task) => task.done == true)
    .length;
}
