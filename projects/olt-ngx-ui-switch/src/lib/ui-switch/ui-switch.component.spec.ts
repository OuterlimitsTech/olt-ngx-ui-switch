import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSwitchComponent } from './ui-switch.component';

describe('UiSwitchComponent', () => {
  let component: UiSwitchComponent;
  let fixture: ComponentFixture<UiSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
