import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({required: true}) userId! : string; 
  @Input() name?: string;
  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basics',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build prototype',
      summary: 'Build a first porototype',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue',
      summary: 'Prepare and descripe an issue',
      dueDate: '2025-12-31',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter( (task) => task.userId === this.userId)
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskDate: NewTaskData){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskDate.title,
      summary: taskDate.summary,
      dueDate: taskDate.date
    })
    this.isAddingTask = false;
  }
}
