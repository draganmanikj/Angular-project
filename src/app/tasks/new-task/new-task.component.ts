import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input ({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService) //inject Tasks Service

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId
  );
  this.close.emit()
  }
}
