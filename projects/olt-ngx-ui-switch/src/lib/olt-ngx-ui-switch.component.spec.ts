import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OltNgxUiSwitchComponent } from './olt-ngx-ui-switch.component';

describe('OltNgxUiSwitchComponent', () => {
  let component: OltNgxUiSwitchComponent;
  let fixture: ComponentFixture<OltNgxUiSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OltNgxUiSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OltNgxUiSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
