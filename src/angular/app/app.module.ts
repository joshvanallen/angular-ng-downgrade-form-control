import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {JVACustomFormControlComponent} from './custom-form-control.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [JVACustomFormControlComponent],
  entryComponents: [JVACustomFormControlComponent]
})
export class AppModule {
  ngDoBootstrap() {}
}