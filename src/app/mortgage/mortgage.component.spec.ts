import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MortgageComponent } from './mortgage.component';
import { ChartsModule } from 'ng2-charts';

describe('MortgageComponent', () => {
  let component: MortgageComponent;
  let fixture: ComponentFixture<MortgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MortgageComponent],
      imports: [FormsModule, ChartsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`calculateInterestPayment`, () => {
    it(`should calculate interest payment`, () => {
      // Assert
      expect(component.calculateInterestPayment(100, 12)).toEqual(1);
    });
  });

  describe(`calculatePrincipal`, () => {
    it(`should calculate principal payment`, () => {
      // Assert
      expect(component.calculatePrincipal(100, 20, 30, 10)).toEqual(60);
    });
  });

  describe(`calculateNewOutstanding`, () => {
    it(`should calculate new outstanding balance`, () => {
      // Assert
      expect(component.calculateNewOutstanding(100, 50)).toEqual(50);
    });
  });

  describe(`calculateMonth`, () => {
    it(`should return a month`, () => {
      // Arrange
      const expectedMonth = {
        outstanding: 100,
        rate: 12,
        monthly: 5,
        escrow: 1,
        interest: 1,
        principal: 3,
        additional: 0
      };

      // Assert
      expect(component.calculateMonth(100, 12, 5, 1, 0)).toEqual(expectedMonth);
    });
  });

  describe(`calculateMortgage`, () => {
    it(`should calculate months of mortgage`, () => {
      // Arrange
      component.outstanding = 100;
      component.rate = 12;
      component.monthly = 10;
      component.escrow = 3;
      component.additional = 1;

      // Act
      component.calculateMortgage();

      // Assert
      expect(component.months.length).toBeGreaterThan(0);
      expect(
        component.months[component.months.length - 1].outstanding
      ).toBeGreaterThanOrEqual(3.334);
      expect(
        component.months[component.months.length - 1].outstanding
      ).toBeLessThanOrEqual(3.335);
      expect(
        component.months[component.months.length - 1].interest
      ).toBeGreaterThanOrEqual(0.033);
      expect(
        component.months[component.months.length - 1].interest
      ).toBeLessThanOrEqual(0.034);
      expect(
        component.months[component.months.length - 1].principal
      ).toBeGreaterThanOrEqual(7.96);
      expect(
        component.months[component.months.length - 1].principal
      ).toBeLessThanOrEqual(7.97);
    });
  });

  describe(`calculateTotalInterest`, () => {
    it(`should calculate the total interest`, () => {
      // Arrange
      const months = [
        {
          outstanding: 100,
          rate: 12,
          monthly: 100,
          escrow: 3,
          interest: 1,
          principal: 96,
          additional: 0
        },
        {
          outstanding: 4,
          rate: 12,
          monthly: 100,
          escrow: 3,
          interest: 0.04,
          principal: 96.96,
          additional: 0
        }
      ];

      // Act
      component.calculateTotalInterest(months);

      // Assert
      expect(component.totalInterest).toBeGreaterThanOrEqual(1.04);
      expect(component.totalInterest).toBeLessThanOrEqual(1.05);
    });
  });

  describe(`calculateDuration`, () => {
    it(`should calculate the total months and years`, () => {
      // Arrange
      const months = [
        {
          outstanding: 100,
          rate: 12,
          monthly: 100,
          escrow: 3,
          interest: 1,
          principal: 96,
          additional: 0
        },
        {
          outstanding: 4,
          rate: 12,
          monthly: 100,
          escrow: 3,
          interest: 0.04,
          principal: 96.96,
          additional: 0
        }
      ];

      // Act
      component.calculateDuration(months);

      // Assert
      expect(component.totalMonths).toEqual(2);
      expect(component.totalYears).toBeGreaterThanOrEqual(0.166);
      expect(component.totalYears).toBeLessThanOrEqual(0.167);
    });
  });
});
