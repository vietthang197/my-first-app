import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from '../shared/server.model';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<Server>();
  @Output() blueprintCreated = new EventEmitter<Server>();

  serverName: string = '';
  serverContent: '';
  serverElements: Server[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onServerAdd() {
    this.serverCreated.emit(new Server(this.serverName, 'server', this.serverContent));
  }

  onServerBlueprintAdd() {
    this.blueprintCreated.emit(new Server(this.serverName, 'blueprint', this.serverContent));
  }
}
