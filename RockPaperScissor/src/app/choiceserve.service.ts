import { HttpClient } from '@angular/common/http';
import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Router } from '@angular/router';
import { playerchoice, resultlist} from './choice';

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
  constructor(private router:Router, public http:HttpClient) { }

  commitchoice(option?: 'rock' | 'paper' | 'scissor') {
    this._choice = option;  
  };
  
  commitshoot(){
  
 let request=this.http.post<resultlist>('http://localhost:5000/Game/Result',{playerchoice:this.choice} as playerchoice);   
 request.subscribe(response =>{
   this.syschoice=response.syschoice;
   this.result=response.result;

 })
 this.router.navigateByUrl('/display');
    
  }
  committry(){
    this.router.navigateByUrl("/choice");
    this._choice=null;
   
  }
}
