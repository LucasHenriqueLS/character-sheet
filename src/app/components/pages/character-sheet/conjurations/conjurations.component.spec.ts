import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjurationsComponent } from './conjurations.component';

describe('ConjurationsComponent', () => {
  let component: ConjurationsComponent;
  let fixture: ComponentFixture<ConjurationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConjurationsComponent]
    });
    fixture = TestBed.createComponent(ConjurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
