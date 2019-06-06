import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-present-value',
  templateUrl: './present-value.component.html',
  styleUrls: ['./present-value.component.scss']
})
export class PresentValueComponent implements OnInit {
  @ViewChild(NgForm, { static: true }) form: NgForm;
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

  calculatePresentValue() {
    this.presentValue = this.futureValue / Math.pow((1 + this.convertPercentage(this.rate)), this.periods);
  }

}
