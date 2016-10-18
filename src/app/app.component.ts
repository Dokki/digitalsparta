import { Component } from '@angular/core';

import { EventService } from './events/shared/event.service';
import { SpeakerService } from './speakers/shared/speaker.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ EventService, SpeakerService ]
})

export class AppComponent { }
