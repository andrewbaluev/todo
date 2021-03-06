import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks?: Task[];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe((task) => (this.tasks = task));
  }
}
