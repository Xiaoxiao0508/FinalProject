import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChoiceserveService } from 'src/app/choiceserve.service';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {

  roundchoice:number;
  constructor(public serve:ChoiceserveService,public router:Router) { }

  ngOnInit(): void {
  }
  start(){
    this.serve.roundquantity= this.roundchoice;
    this.serve.roundNo = 1;
    this.router.navigateByUrl("/choice")
  }

}
