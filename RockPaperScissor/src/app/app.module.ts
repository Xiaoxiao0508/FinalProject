import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './routers/choice/choice.component';
import { DisplayComponent } from './routers/display/display.component';
import { PagenotfoundComponent } from './routers/pagenotfound/pagenotfound.component';
import { LeaderBoardComponent } from './routers/leader-board/leader-board.component';
import { RoundComponent } from './routers/round/round.component';
import { HeaderComponent } from './routers/header/header.component';
import { ViewReportComponent } from './routers/view-report/view-report.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    DisplayComponent,
    PagenotfoundComponent,
    LeaderBoardComponent,
    RoundComponent,
    HeaderComponent,
    ViewReportComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
