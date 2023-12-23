import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedSkillsComponent } from './specialized-skills.component';

describe('SpecializedSkillsComponent', () => {
  let component: SpecializedSkillsComponent;
  let fixture: ComponentFixture<SpecializedSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecializedSkillsComponent]
    });
    fixture = TestBed.createComponent(SpecializedSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
