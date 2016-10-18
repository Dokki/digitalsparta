import { Component, OnInit } from '@angular/core';

import { Speaker } from './shared/speaker.model';
import { SpeakerService } from './shared/speaker.service';

@Component({
    selector: 'speaker-list',
    template: `
      <table>
        <tr *ngFor="let speaker of speakers">
            <td>{{speaker.FirstName}}</td>
            <td>{{speaker.LastName}}</td>
            <td>{{speaker.Photo}}</td>
            <td>{{speaker.Bio}}</td>
            <td>{{speaker.Birthday}}</td>
        </tr>
      </table>
    `
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
