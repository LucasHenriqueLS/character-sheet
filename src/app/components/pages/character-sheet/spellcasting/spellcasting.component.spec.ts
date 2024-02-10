import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellcastingComponent } from './spellcasting.component';

describe('SpellcastingComponent', () => {
  let component: SpellcastingComponent;
  let fixture: ComponentFixture<SpellcastingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpellcastingComponent]
    });
    fixture = TestBed.createComponent(SpellcastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
