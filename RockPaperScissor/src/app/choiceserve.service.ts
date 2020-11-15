import { HttpClient } from '@angular/common/http';
import { InterpolationConfig } from '@angular/compiler';
import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Router } from '@angular/router';
import { leaderboard, leaderboardline, playerroundrequest, roundresult, gameresult, } from './choice';

@Injectable({
  providedIn: 'root'
})
export class ChoiceserveService {
  private _choice: 'rock' | 'paper' | 'scissor'|null;
  get choice() {
    return this._choice;
  }
  public syschoice: string;
  public result: string;
  public username: string;
  roundquantity: number;
  roundNo: number;
  roundList = [1, 3, 5];
  choicelist: string[]=[];
  disabled: boolean = false;
  gameresult: gameresult;
  roundresult:roundresult[]=[];
  public leaderboardline: leaderboardline;
  public leaderboardlist: leaderboardline[];
  constructor(private router: Router, public http: HttpClient) { }

  commitchoice(option?: 'rock' | 'paper' | 'scissor') {
    this._choice = option;
  };

  commitshoot() {
    this.choicelist.push(this._choice);
    this.roundNo++;
    if (this.roundNo>this.roundquantity) 
    {this.router.navigateByUrl('/display');
      let request = this.http.post<gameresult>('http://localhost:5000/Game/result', { Name: this.username, numberofrounds: this.roundquantity, choices: this.choicelist } as playerroundrequest);
      request.subscribe(response => {
       
        this.gameresult = response;
        this.result=response.result;
        this.roundresult=response.allresult;
      })
      alert("resultpage");
     
    }
    else {
      this.disabled == true;
    }

  }
  committry() {
    this.router.navigateByUrl("/choice");
    this._choice = null;

  }

  commitview() {

    let request = this.http.get<leaderboard>('http://localhost:5000/Game/leaderboard');
    request.subscribe(response => {

      this.leaderboardlist = response.leaderboardlist;

    })
    this.router.navigateByUrl("/board");
  }

}
