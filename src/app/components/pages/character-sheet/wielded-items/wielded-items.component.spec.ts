import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WieldedItemsComponent } from './wielded-items.component';

describe('WieldedItemsComponent', () => {
  let component: WieldedItemsComponent;
  let fixture: ComponentFixture<WieldedItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WieldedItemsComponent]
    });
    fixture = TestBed.createComponent(WieldedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
