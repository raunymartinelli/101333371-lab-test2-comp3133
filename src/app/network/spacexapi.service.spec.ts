import { TestBed } from '@angular/core/testing';

import { MissionService } from '../network/spacexapi.service';

describe('MissionService', () => {
    let service: MissionService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MissionService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
