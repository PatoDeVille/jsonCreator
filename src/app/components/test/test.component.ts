import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
  ]
})
export class TestComponent implements OnInit, OnChanges {

  @Input() someProp: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.debug(changes)
    this.someProp = changes['someProp'].currentValue;
  }
}
