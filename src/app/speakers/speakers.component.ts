import { Component, OnInit } from '@angular/core';
import { Speaker } from './shared/speaker.model';
import { SpeakerService } from './shared/speaker.service';

@Component({
    selector: 'speaker-list',
    template: `
      <pre>{{speakers | json}}</pre>
    `
})

export class SpeakersComponent implements OnInit {
    speakers: Speaker[] = [];
    constructor(private SpeakerService: SpeakerService) {}
    ngOnInit() {
        this.SpeakerService.getSpeakers()
            .then(speakers => this.speakers = speakers);
    }
}
