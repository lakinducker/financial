import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-compound-interest',
  templateUrl: './compound-interest.component.html',
  styleUrls: ['./compound-interest.component.scss']
})
export class CompoundInterestComponent implements OnInit {
  @ViewChild(NgForm) form: NgForm;
  originalBalance: number;
  rate: number;
  periods: number;
  compoundInterest: number;

  constructor() { }

  ngOnInit() {
  }

  convertPercentage(percentage) {
    return percentage * 0.01;
  }

  calculateCompoundInterest() {
    this.compoundInterest = this.originalBalance * (Math.pow((1 + this.convertPercentage(this.rate)), this.periods) - 1);
  }

}
