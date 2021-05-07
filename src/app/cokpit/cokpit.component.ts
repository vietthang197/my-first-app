import {
  Component,
  EventEmitter,
  OnInit,
  Output, SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Server} from '../shared/server.model';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CokpitComponent implements OnInit{

  @Output() serverCreated = new EventEmitter<Server>();
  @Output() blueprintCreated = new EventEmitter<Server>();

  @ViewChild('serverNameInput', {static: false}) serverNameInput;

  serverName: string = '';
  serverContent: '';
  serverElements: Server[] = [];

  constructor() {
  }

  onServerAdd() {
    this.serverCreated.emit(new Server(this.serverName, 'server', this.serverContent));
  }

  onServerBlueprintAdd() {
    this.blueprintCreated.emit(new Server(this.serverName, 'blueprint', this.serverContent));
  }

  ngOnInit(): void {
  }
}
