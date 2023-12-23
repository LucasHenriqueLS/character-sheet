import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensesComponent } from './senses.component';

describe('SensesComponent', () => {
  let component: SensesComponent;
  let fixture: ComponentFixture<SensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SensesComponent]
    });
    fixture = TestBed.createComponent(SensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
