import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReflectedTextComponent } from './reflected-text/reflected-text.component';
import { TextInputComponent } from './text-input/text-input.component';


@NgModule({
  declarations: [
    AppComponent,
    ReflectedTextComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
