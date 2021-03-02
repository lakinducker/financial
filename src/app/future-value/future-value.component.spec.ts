import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FutureValueComponent } from './future-value.component';
import { NgForm, FormsModule } from '@angular/forms';

describe('FutureValueComponent', () => {
  let component: FutureValueComponent;
  let fixture: ComponentFixture<FutureValueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`calculateFutureValue`, () => {
    it(`should calculate future value`, () => {
      // Arrange
      component.presentValue = 100;
      component.rate = 5;
      component.periods = 10;

      // Act
      component.calculateFutureValue();

      // Assert
      expect(component.futureValue).toBeGreaterThan(162.8);
      expect(component.futureValue).toBeLessThan(162.9);
    });
  });
});
