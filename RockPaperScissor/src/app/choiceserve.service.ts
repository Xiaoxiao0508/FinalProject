import { HttpClient } from '@angular/common/http';
import { InterpolationConfig } from '@angular/compiler';
import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Router } from '@angular/router';
import { leaderboard, leaderboardline, Player, playerchoice, resultlist, resultSum} from './choice';

@Injectable({
  providedIn: 'root'
})
export class ChoiceserveService {
  private _choice: 'rock' | 'paper' | 'scissor';
  get choice(){
    return this._choice;
  }
  public syschoice:string;
  public result:string;
  public Username:string;
  public leaderboardline:leaderboardline;
  public leaderboardlist:leaderboardline[];
  constructor(private router:Router, public http:HttpClient) { }

  commitchoice(option?: 'rock' | 'paper' | 'scissor') {
    this._choice = option;  
  };
  
  commitshoot(name:string){
  
 let request=this.http.post<resultlist>('http://localhost:5000/Game/result',{Name:this.Username,Choice:this.choice}  as Player);   
 request.subscribe(response =>{
   this.syschoice=response.syschoice;
   this.result=response.result;

 })
 this.router.navigateByUrl('/display');
 this.Username=name;
    
  }
  committry(){
    this.router.navigateByUrl("/choice");
    this._choice=null;
   
  }

  commitview(){

    let request=this.http.get<leaderboard>('http://localhost:5000/Game/leaderboard');   
    request.subscribe(response =>{
 
      this.leaderboardlist=response.leaderboardlist;
   
    })
    this.router.navigateByUrl("/board");
  }

}
