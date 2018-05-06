import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-future-value',
  templateUrl: './future-value.component.html',
  styleUrls: ['./future-value.component.scss']
})
export class FutureValueComponent implements OnInit {
  @ViewChild(NgForm) form: NgForm;
  presentValue: number;
  rate: number;
  periods: number;
  futureValue: number;

  constructor() { }

  ngOnInit() {
  }

  convertPercentage(percentage) {
    return percentage * 0.01;
  }

  calculateFutureValue() {
    this.futureValue = this.presentValue * Math.pow((1 + this.convertPercentage(this.rate)), this.periods);
  }



}
