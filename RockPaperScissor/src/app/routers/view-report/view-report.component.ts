import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChoiceserveService } from 'src/app/choiceserve.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  constructor(public router:Router, public serve:ChoiceserveService) { }

  ngOnInit(): void {
  }
view(){
  this.serve.commitview()
}
}
