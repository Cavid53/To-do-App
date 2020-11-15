import { Component } from '@angular/core';
import { Life, TodoItem } from './models/life';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lifeModel = new Life();
  isDisplay = false;

  getName(): any {
    return this.lifeModel.user;
  }

  getItems(): any {
    if (this.isDisplay) {
      return this.lifeModel.items;
    }
    return this.lifeModel.items.filter((item: any) => !item.action);
  }

  addItem(value: any): any {
    if (value !== '') {
      this.lifeModel.items.push(new TodoItem(value, false));
    }
  }
}
