import { Component, OnInit } from '@angular/core';
import { ChoiceserveService } from 'src/app/choiceserve.service';
import { LeaderBoardService } from 'src/app/leader-board.service';


@Component({
  selector: 'app-display',
  templateUrl: "./display.component.html",
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public serve: ChoiceserveService) { }

  ngOnInit(): void {

  }
  tryagain() {
    this.serve.committry();
  }
  viewreport() {
    this.serve.commitview();
  }
}
