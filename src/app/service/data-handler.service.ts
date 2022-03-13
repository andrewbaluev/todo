import { Injectable } from '@angular/core';
import { TestData } from '../data/testdate';
import { Category } from '../model/Category';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  constructor() {}

  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }
}
