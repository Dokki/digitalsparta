import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Event } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
    selector: 'event-detail',
    templateUrl: 'event-detail.component.html'
})

export class EventDetailComponent implements OnInit {
    event: Event;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: EventService) {}

    ngOnInit() {
      this.route.params.forEach((params: Params) => {
        this.service.getEvent(params['id']).subscribe(event => this.event = event);
      });
    }

    gotoEvents() {
      this.router.navigate(['/events']);
    }

    saveEvent(event: Event) {
      this.service.updateEvent(event).subscribe((event) => {
        console.log(event);
        if (event){
          this.router.navigate(['/events']);
        }
      });
    }
}
