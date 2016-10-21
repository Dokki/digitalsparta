import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Speaker } from './shared/speaker.model';
import { SpeakerService } from './shared/speaker.service';

@Component({
    selector: 'speaker-list',
    templateUrl: 'speaker-list.component.html'
})

export class SpeakerListComponent implements OnInit {
    errorMessage: string;
    speakers: Speaker[] = [];

    constructor(private service: SpeakerService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.service.getSpeakers()
            .subscribe(speakers => this.speakers = speakers, error =>  this.errorMessage = <any>error);
    }

    onSelect(speaker: Speaker) {
        this.router.navigate(['/speaker', speaker._id]);
    }    
}
