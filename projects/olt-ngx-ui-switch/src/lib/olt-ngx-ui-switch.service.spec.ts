import { TestBed } from '@angular/core/testing';

import { OltNgxUiSwitchService } from './olt-ngx-ui-switch.service';

describe('OltNgxUiSwitchService', () => {
  let service: OltNgxUiSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OltNgxUiSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
