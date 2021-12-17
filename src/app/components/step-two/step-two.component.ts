import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styles: [],
})
export class StepTwoComponent implements OnInit, OnChanges {
  @Input() validJSON: boolean = true;
  @Input() parsedJSON: { [x: string]: string } = {};
  @Output() handleClick = new EventEmitter<void>();
  keysArray: string[] = [];
  submitted: boolean = false
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.parsedJSON = changes['parsedJSON'].currentValue;
    this.keysArray = Object.keys(this.parsedJSON);
  }

  handleObject(key: string, value: string) {
    this.parsedJSON[key] = value;
  }

  handleSubmit(){
    this.submitted = true;
    setTimeout(()=>{
      this.handleClick.emit();
    },500)
  }
}
