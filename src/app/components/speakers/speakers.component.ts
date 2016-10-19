import { Component, OnInit } from '@angular/core';

import { Speaker } from './shared/speaker.model';
import { SpeakerService } from './shared/speaker.service';

@Component({
    selector: 'speaker-list',
    templateUrl: 'speakers.component.html'
})

export class SpeakersComponent implements OnInit {
    errorMessage: string;
    speakers: Speaker[] = [];

    constructor(private SpeakerService: SpeakerService) {}

    ngOnInit() {
        this.SpeakerService.getSpeakers()
            .subscribe(speakers => this.speakers = speakers, error =>  this.errorMessage = <any>error);
    }
}
