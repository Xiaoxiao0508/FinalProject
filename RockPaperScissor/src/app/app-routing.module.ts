import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ChoiceComponent } from './routers/choice/choice.component';
import { DisplayComponent } from './routers/display/display.component';
import { LeaderBoardComponent } from './routers/leader-board/leader-board.component';
import { PagenotfoundComponent } from './routers/pagenotfound/pagenotfound.component';
import { RoundComponent } from './routers/round/round.component';

const routes: Routes = [
  {path:'',redirectTo:'round',pathMatch:"full"},
  {path:'round',component:RoundComponent},
  {path:'choice',component:ChoiceComponent},
  {path:'display',component:DisplayComponent},
  {path:'board',component:LeaderBoardComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
