import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { leaderboard } from './choice';

@Injectable({
  providedIn: 'root'
})
export class LeaderBoardService {

  constructor(private router:Router, public http:HttpClient) { }
  // commitview(){

  //   let request=this.http.post<leaderboard>('http://localhost:5000/Game/leaderboard',{Name:this.playername,Choice:} as Player);   
  //   request.subscribe(response =>{
  //     this.syschoice=response.syschoice;
  //     this.result=response.result;
   
  //   })
  //   this.router.navigateByUrl("/board");
  // }
}
