import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoiceComponent } from './routers/choice/choice.component';
import { DisplayComponent } from './routers/display/display.component';
import { PagenotfoundComponent } from './routers/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'choice',pathMatch:"full"},
  {path:'choice',component:ChoiceComponent},
  {path:'display',component:DisplayComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
