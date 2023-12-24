import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePointsComponent } from './life-points.component';

describe('LifePointsComponent', () => {
  let component: LifePointsComponent;
  let fixture: ComponentFixture<LifePointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifePointsComponent]
    });
    fixture = TestBed.createComponent(LifePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
