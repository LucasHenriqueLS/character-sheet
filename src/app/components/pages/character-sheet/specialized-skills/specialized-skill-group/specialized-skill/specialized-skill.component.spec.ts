import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedSkillComponent } from './specialized-skill.component';

describe('SpecializedSkillComponent', () => {
  let component: SpecializedSkillComponent;
  let fixture: ComponentFixture<SpecializedSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecializedSkillComponent]
    });
    fixture = TestBed.createComponent(SpecializedSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
