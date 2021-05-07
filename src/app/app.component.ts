import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Server} from './shared/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: 'fuck';
  name: string = '';
  listName: Array<string> = [];
  dataServerElements: Server[] = [
    new Server('fuk', 'server', 'sss'),
    new Server('fuk', 'blueprint', 'sss')
  ];

  showHome: boolean = false;

  items = ['Tomato', 'Apple', 'Banana', 'Grape', 'Mango', 'Starfruit'];

  updateListName(): void {
    this.listName.push(this.name);
    this.name = '';
  }

  clearListName(): void {
    this.listName = [];
  }

  onServerAddOnAppComponent(data: Server): void {
    this.dataServerElements.push(new Server(data.serverName, 'server', data.content));
    // this.resetForm();
  }

  onServerBlueprintAddOnAppComponent(data: Server) {
    this.dataServerElements.push(new Server(data.serverName, 'blueprint', data.content));
    // this.resetForm();
  }

  constructor() {

  }

  ngOnInit(): void {

  }

  removeListServer(): void {
    this.dataServerElements.splice(0, 1);
  }

}
