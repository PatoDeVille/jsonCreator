import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  error: boolean = false;
  validJSON: boolean = false;
  hideStepOne: boolean = false;
  hideStepTwo: boolean = false;
  parsedJson: { [x: string]: string } = {};
  newJson: string = '';

  ngOnInit() {}

  validateJSON(value: string) {
    try {
      JSON.parse(value);
      return true;
    } catch (e) {
      return false;
    }
  }

  onSubmit(value: string) {
    if (this.validateJSON(value)) {
      this.error = false;
      this.validJSON = true;

      setTimeout(() => {
        this.hideStepOne = true;
      }, 500);

      let cleanJson = JSON.parse(value);
      Object.keys(cleanJson).forEach((key) => {
        cleanJson[key] = '';
      });
      this.parsedJson = cleanJson;
    } else {
      this.error = true;
      this.validJSON = false;
    }
  }

  handleStep2Click(){
    this.hideStepTwo = !this.hideStepTwo;
     this.newJson = JSON.stringify(this.parsedJson, null, 2);
  }
}
