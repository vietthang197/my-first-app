import {
  AfterContentChecked,
  AfterContentInit, AfterViewInit,
  Component, ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Server} from '../shared/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent
    implements
    OnChanges,
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        OnDestroy {
    @Input('srvElement') element: Server;
    @ContentChild('contentElmParagraph') contentElmParagraph;

  ngAfterViewInit(): void {
    console.log(this.contentElmParagraph);
  }

  constructor() {
    // console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('OnChanges');
  }

  ngOnInit(): void {
    // console.log('OnInit');
  }

  ngDoCheck(): void {
    // console.log('DoCheck');
  }

  ngAfterContentInit(): void {
    // console.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('AfterContentChecked');
  }

  ngOnDestroy(): void {
    // console.log('OnDestroy');
  }
}
