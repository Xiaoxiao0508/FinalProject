import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './routers/choice/choice.component';
import { DisplayComponent } from './routers/diplay/display.component';
import { PagenotfoundComponent } from './routers/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    DisplayComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
