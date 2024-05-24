import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectorRef,
  SimpleChanges,
} from '@angular/core';
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
  @Input() totalDoneTasks: number = 0;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.tasks);
    if (changes['tasks']) {
      this.cdRef.detectChanges(); // Trigger change detection for child component
    }
  }

  ngOnInit(): void {
    const localTasks = localStorage.getItem('tasks');
    if (localTasks) {
      this.tasks = JSON.parse(localTasks);
      this.totalDoneTasks = this.tasks.filter((task) => task.done).length;
    }
  }
}
