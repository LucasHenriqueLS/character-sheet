import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WieldedItemComponent } from './wielded-item.component';

describe('WieldedItemComponent', () => {
  let component: WieldedItemComponent;
  let fixture: ComponentFixture<WieldedItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WieldedItemComponent]
    });
    fixture = TestBed.createComponent(WieldedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
