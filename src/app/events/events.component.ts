import { Component, OnInit } from '@angular/core';
import { Event } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
    selector: 'event-list',
    template: `
      <pre>{{events | json}}</pre>
    `
})

export class EventsComponent implements OnInit {
    events: Event[] = [];
    constructor(private EventService: EventService) {}
    ngOnInit() {
        this.EventService.getEvents()
            .then(events => this.events = events);
    }
}
