import { Injectable } from '@angular/core';
import { SPEAKERS } from './mock-speakers';

@Injectable()
export class SpeakerService {
    getSpeakers() {
        return Promise.resolve(SPEAKERS);
    }
}