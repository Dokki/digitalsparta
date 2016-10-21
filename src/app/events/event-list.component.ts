import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Event } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
    selector: 'event-list',
    templateUrl: 'event-list.component.html'
})

export class EventListComponent implements OnInit {
    errorMessage: string;
    events: Event[] = [];

    constructor(private service: EventService,
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit() {
        this.service.getEvents()
            .subscribe(events => this.events = events, error =>  this.errorMessage = <any>error);
    }

    onSelect(event: Event) {
        this.router.navigate(['/event', event._id]);
    }
}
