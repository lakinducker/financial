import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cagr',
  templateUrl: './cagr.component.html',
  styleUrls: ['./cagr.component.scss']
})
export class CagrComponent implements OnInit {
  @ViewChild(NgForm, { static: true }) form: NgForm;
  beginning: number;
  ending: number;
  rate: number;
  periods: number;
  cagr: number;

  constructor() {}

  ngOnInit() {}

  calculateCagr() {
    this.cagr = Math.pow(this.ending / this.beginning, 1 / this.periods) - 1;
  }
}
