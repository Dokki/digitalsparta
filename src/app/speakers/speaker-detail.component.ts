import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Speaker } from './shared/speaker.model';
import { SpeakerService } from './shared/speaker.service';

@Component({
    selector: 'speaker-detail',
    templateUrl: 'speaker-detail.component.html'
})

export class SpeakerDetailComponent implements OnInit {
    speaker: Speaker;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: SpeakerService) {}

    ngOnInit() {
      this.route.params.forEach((params: Params) => {
        this.service.getSpeaker(params['id']).subscribe(speaker => this.speaker = speaker);
      });
    }
}
