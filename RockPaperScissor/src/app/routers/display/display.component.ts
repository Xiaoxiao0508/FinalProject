import { Component, OnInit } from '@angular/core';
import { ChoiceserveService } from 'src/app/choiceserve.service';


@Component({
  selector: 'app-display',
  templateUrl: "./display.component.html",
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
public test='12334'
  constructor(public serve:ChoiceserveService) { }

  ngOnInit(): void {

  }
tryagain(){
  this.serve.committry();
}
}
