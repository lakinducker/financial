import { Month } from './month';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss']
})
export class MortgageComponent implements OnInit {
  @ViewChild(NgForm) form: NgForm;
  months: Month[] = [];
  outstanding: number;
  rate: number;
  monthly: number;
  escrow: number;
  additional: number;
  totalInterest: number;
  totalMonths: number;
  totalYears: number;

  constructor() { }

  ngOnInit() {
  }

  convertPercentage(percentage) {
    return percentage / 100;
  }

  calculateInterestPayment(outstanding, rate) {
    return outstanding * (this.convertPercentage(rate) / 12);
  }

  calculatePrincipal(monthly, escrow, interest) {
    return monthly - escrow - interest;
  }

  calculateNewOutstanding(outstanding, principal, additional) {
    return outstanding - principal - additional;
  }

  calculateMonth(outstanding, rate, monthly, escrow, additional): Month {
    const month: Month = {
      outstanding: outstanding,
      rate: rate,
      monthly: monthly,
      escrow: escrow,
      interest: this.calculateInterestPayment(outstanding, rate),
      principal: this.calculatePrincipal(monthly, escrow, this.calculateInterestPayment(outstanding, rate)),
      additional: additional,
    };
    return month;
  }

  calculateMortgage() {
    this.months = [];
    let currentOustanding = this.outstanding;
    let count = 360;
    while (currentOustanding > 0 && count > 0) {
      const currentMonth = this.calculateMonth(currentOustanding, this.rate, this.monthly, this.escrow, this.additional);
      this.months.push(currentMonth);
      currentOustanding = this.calculateNewOutstanding(
        currentOustanding,
        currentMonth.principal,
        this.additional);
      count--;
    }
    this.calculateTotalInterest(this.months);
    this.calculateDuration(this.months);
  }

  calculateTotalInterest(months) {
    this.totalInterest = 0;
    months.forEach((month) => {
      this.totalInterest += month.interest;
    });
  }

  calculateDuration(months) {
    this.totalMonths = months.length;
    this.totalYears = this.totalMonths / 12;
  }
}
