import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedSkillGroupComponent } from './specialized-skill-group.component';

describe('SpecializedSkillGroupComponent', () => {
  let component: SpecializedSkillGroupComponent;
  let fixture: ComponentFixture<SpecializedSkillGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecializedSkillGroupComponent]
    });
    fixture = TestBed.createComponent(SpecializedSkillGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
