import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenseComponent } from './sense.component';

describe('SenseComponent', () => {
  let component: SenseComponent;
  let fixture: ComponentFixture<SenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenseComponent]
    });
    fixture = TestBed.createComponent(SenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});