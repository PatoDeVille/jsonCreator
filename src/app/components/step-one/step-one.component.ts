import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styles: [
  ]
})
export class StepOneComponent implements OnInit {

  @Input() validJSON: boolean = true;

 @Input() error:boolean =  false;

  @Output() onSubmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(some:any){}
}
