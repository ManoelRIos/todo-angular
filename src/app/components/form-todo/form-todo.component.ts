import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-todo.component.html',
  styleUrl: './form-todo.component.scss',
})
export class FormTodoComponent {
  task: string = '';

  @Output() addTask = new EventEmitter<string>();

  onAddTask() {
    this.task ? this.addTask.emit(this.task) : alert('Adicione uma descrição da tarefa!');
  }
}
