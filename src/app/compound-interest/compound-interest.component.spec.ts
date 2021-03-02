import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompoundInterestComponent } from './compound-interest.component';
import { FormsModule } from '@angular/forms';

describe('CompoundInterestComponent', () => {
  let component: CompoundInterestComponent;
  let fixture: ComponentFixture<CompoundInterestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundInterestComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`calculateCompoundInterest`, () => {
    it(`should calculate compound interest`, () => {
      // Arrange
      component.originalBalance = 1000;
      component.rate = 1;
      component.periods = 36;

      // Act
      component.calculateCompoundInterest();

      // Assert
      expect(component.compoundInterest).toBeGreaterThan(430.7);
      expect(component.compoundInterest).toBeLessThan(430.8);
    });
  });
});
