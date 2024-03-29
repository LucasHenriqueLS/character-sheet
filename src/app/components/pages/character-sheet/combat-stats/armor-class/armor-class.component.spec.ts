import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorClassComponent } from './armor-class.component';

describe('ArmorClassComponent', () => {
  let component: ArmorClassComponent;
  let fixture: ComponentFixture<ArmorClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmorClassComponent]
    });
    fixture = TestBed.createComponent(ArmorClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
