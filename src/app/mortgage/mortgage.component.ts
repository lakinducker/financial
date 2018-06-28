import { Month } from './month';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = ['Present', 'Future'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [
    { data: [], label: 'Interest' },
    { data: [], label: 'Principal' }
  ];
  valid = true;

  constructor() {}

  ngOnInit() {}

  convertPercentage(percentage) {
    return percentage / 100;
  }

  calculateInterestPayment(outstanding, rate) {
    return outstanding * (this.convertPercentage(rate) / 12);
  }

  calculatePrincipal(monthly, escrow, interest, additional) {
    return monthly - escrow - interest + additional;
  }

  calculateNewOutstanding(outstanding, principal) {
    return outstanding - principal;
  }

  calculateMonth(outstanding, rate, monthly, escrow, additional): Month {
    const month: Month = {
      outstanding: outstanding,
      rate: rate,
      monthly: monthly,
      escrow: escrow,
      interest: this.calculateInterestPayment(outstanding, rate),
      principal: this.calculatePrincipal(
        monthly,
        escrow,
        this.calculateInterestPayment(outstanding, rate),
        additional
      ),
      additional: additional
    };
    return month;
  }

  calculateMortgage() {
    // Clear the chart data
    this.clearChartData();

    // Calculate mortgage
    this.months = [];
    let currentOustanding = this.outstanding;
    let count = 360;
    while (currentOustanding > 0 && count > 0) {
      const currentMonth = this.calculateMonth(
        currentOustanding,
        this.rate,
        this.monthly,
        this.escrow,
        this.additional
      );
      this.months.push(currentMonth);
      currentOustanding = this.calculateNewOutstanding(
        currentOustanding,
        currentMonth.principal
      );
      count--;
    }
    this.calculateTotalInterest(this.months);
    this.calculateDuration(this.months);
    this.valid = this.isValid(currentOustanding);

    // Update the chart data
    this.updateChartData();
  }

  calculateTotalInterest(months) {
    this.totalInterest = 0;
    months.forEach(month => {
      this.totalInterest += month.interest;
    });
  }

  calculateDuration(months) {
    this.totalMonths = months.length;
    this.totalYears = this.totalMonths / 12;
  }

  updateChartData() {
    this.months.forEach((month, i) => {
      this.barChartLabels.push((i + 1).toString());
      this.barChartData[0].data.push(month.interest);
      this.barChartData[1].data.push(month.principal);
    });
  }

  clearChartData() {
    this.barChartLabels = [];
    this.barChartData[0].data = [];
    this.barChartData[1].data = [];
  }

  isValid(currentOustanding) {
    return currentOustanding <= 0 ? true : false;
  }
}
