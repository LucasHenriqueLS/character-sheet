import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitDieComponent } from './hit-die.component';

describe('HitDieComponent', () => {
  let component: HitDieComponent;
  let fixture: ComponentFixture<HitDieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HitDieComponent]
    });
    fixture = TestBed.createComponent(HitDieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
