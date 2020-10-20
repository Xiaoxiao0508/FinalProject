import { Component, OnInit } from '@angular/core';
import { ChoiceserveService } from 'src/app/choiceserve.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  constructor(private serve:ChoiceserveService) { }

  ngOnInit(): void {
  }
  choice(option?:'rock'|'paper'|'scissor'){
   
    this.serve.commitchoice(option)
  }
  shoot(){
    this.serve.commitshoot("this.serve.choice");
 
  }

}
