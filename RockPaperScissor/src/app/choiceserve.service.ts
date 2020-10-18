import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChoiceserveService {
  private _choice: 'rock' | 'paper' | 'scissor';
  get choice(){
    return this._choice;
  }
  public Isrock:boolean=false;
  public Ispaper:boolean=false;
  public Isscissor:boolean=false;

  constructor(private router:Router) { }
  commitchoice(option: 'rock' | 'paper' | 'scissor') {
    this._choice = option;  
  };
  commitshoot(){
    if(this._choice=='rock'){
      this.Isrock=true; 
    }
    if(this._choice=='paper'){
      this.Ispaper=true; 
    }
    else if (this._choice=='scissor'){
      this.Isscissor=true; 
    }
    this.router.navigateByUrl('/display');
    
  }
  committry(){
    this.router.navigateByUrl("/choice");
   this.Isrock=false;
    this.Ispaper=false;
    this.Isscissor=false;
    // alternatives?
  }
}
