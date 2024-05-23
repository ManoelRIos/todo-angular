import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  task: string = '';

  @Output() addTask = new EventEmitter<string>();

  onAddTask() {
    this.task ? this.addTask.emit(this.task) : alert('Adicione uma descrição da tarefa!');
  }
}
