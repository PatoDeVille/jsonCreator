import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  @Output() handleChange = new EventEmitter;
  @Input() key: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
