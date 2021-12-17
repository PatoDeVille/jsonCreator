import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styles: [],
})
export class StepThreeComponent implements OnInit {
  @Input() newJson: string = '';

  copied: boolean = false;
  
  constructor() {}

  ngOnInit(): void {}

  copyText() {
    if (!this.newJson) {
      return;
    }
    navigator.clipboard.writeText(this.newJson);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }
    , 2000);
  }
}
