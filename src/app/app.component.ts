import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  listName: Array<string> = [];

  updateListName = () => {
    this.listName.push(this.name);
    this.name = '';
  }

  clearListName = () => {
    this.listName = [];
  }
}
