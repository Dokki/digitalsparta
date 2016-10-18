import { Component, OnInit } from '@angular/core';

import { Event } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
    selector: 'event-list',
    templateUrl: './events.component.html'
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
