import { Component, OnInit } from '@angular/core';

import { Event } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
    selector: 'event-list',
    template: `
      <table>
        <tr *ngFor="let event of events">
            <td>{{event.BeginDate}}</td>
            <td>{{event.EndDate}}</td>
            <td>{{event.Title}}</td>
            <td>{{event.Description}}</td>
        </tr>
      </table>
    `
})

export class EventsComponent implements OnInit {
    errorMessage: string;
    events: Event[] = [];

    constructor(private EventService: EventService) {}

    ngOnInit() {
        this.EventService.getEvents()
            .subscribe(events => this.events = events, error =>  this.errorMessage = <any>error);
    }
}
