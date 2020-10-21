import { HttpClient } from '@angular/common/http';
import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Router } from '@angular/router';
import { resultlist,SendChoice} from './choice';

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
  // public Isrock:boolean=false;
  // public Ispaper:boolean=false;
  // public Isscissor:boolean=false;

  constructor(private router:Router, public http:HttpClient) { }
  commitchoice(option?: 'rock' | 'paper' | 'scissor') {
    this._choice = option;  
  };
  commitshoot(sentchoice:string){
    // if(this._choice=='rock'){
    //   this.Isrock=true; 
    // }
    // if(this._choice=='paper'){
    //   this.Ispaper=true; 
    // }
    // else if (this._choice=='scissor'){
    //   this.Isscissor=true; 
    // }


 let request=this.http.post<resultlist>('http://localhost:5000/Game',{selection:sentchoice} as SendChoice);   
 request.subscribe(response =>{
   this.syschoice=response.systemchoice;
   this.result=response.result;

 })
 this.router.navigateByUrl('/display');
    
  }
  committry(){
    this.router.navigateByUrl("/choice");
  //  this.Isrock=false;
  //   this.Ispaper=false;
  //   this.Isscissor=false;
    this._choice=null;
    // alternatives?
  }
}
