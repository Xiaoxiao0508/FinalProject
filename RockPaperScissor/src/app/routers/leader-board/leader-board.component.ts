import { Component, OnInit } from '@angular/core';
import { ChoiceserveService } from 'src/app/choiceserve.service';


@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  constructor(public serve:ChoiceserveService) { }

  ngOnInit(): void {
  }

}
