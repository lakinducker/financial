import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CagrComponent } from './cagr.component';
import { FormsModule } from '@angular/forms';

describe('CagrComponent', () => {
  let component: CagrComponent;
  let fixture: ComponentFixture<CagrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CagrComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CagrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`calculateCagr`, () => {
    it(`should calculate Compound Annual Growth Rate`, () => {
      // Arrange
      component.beginning = 10000;
      component.ending = 19500;
      component.periods = 3;

      // Act
      component.calculateCagr();

      // Assert
      expect(component.cagr).toBeGreaterThanOrEqual(0.2493);
      expect(component.cagr).toBeLessThanOrEqual(0.2494);
    });
  });
});
