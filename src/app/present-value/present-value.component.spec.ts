import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PresentValueComponent } from './present-value.component';
import { FormsModule } from '@angular/forms';

describe('PresentValueComponent', () => {
  let component: PresentValueComponent;
  let fixture: ComponentFixture<PresentValueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`calculatePresentValue`, () => {
    it(`should calculate present value`, () => {
      // Arrange
      component.futureValue = 100;
      component.rate = 1;
      component.periods = 12;

      // Act
      component.calculatePresentValue();

      // Assert
      expect(component.presentValue).toBeGreaterThan(88.7);
      expect(component.presentValue).toBeLessThan(88.9);
    });
  });
});
