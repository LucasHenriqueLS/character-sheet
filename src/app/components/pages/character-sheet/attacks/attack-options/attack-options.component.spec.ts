import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackOptionsComponent } from './attack-options.component';

describe('AttackOptionsComponent', () => {
  let component: AttackOptionsComponent;
  let fixture: ComponentFixture<AttackOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttackOptionsComponent]
    });
    fixture = TestBed.createComponent(AttackOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
