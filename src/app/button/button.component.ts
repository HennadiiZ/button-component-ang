import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  // selector: '[app-button]',
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnName!: string;

  @Input() btnClass!: string;

  @Output() inAction = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  emitEvent(){
    this.inAction.emit('emitEvent');
  }

}
