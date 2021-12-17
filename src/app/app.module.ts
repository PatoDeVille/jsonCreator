import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './components/test/test.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { InputComponent } from './components/input/input.component';
import { StepThreeComponent } from './components/step-three/step-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    StepOneComponent,
    StepTwoComponent,
    InputComponent,
    StepThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
