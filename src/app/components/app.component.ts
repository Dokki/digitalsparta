import { Component } from '@angular/core';

import { EventService } from './events/shared/event.service';
import { SpeakerService } from './speakers/shared/speaker.service';
import { LoginService } from './login/shared/login.service';

@Component({
    selector: 'my-app',
    // templateUrl: 'app.component.html',
    template: '<router-outlet></router-outlet>',
    providers: [ EventService, SpeakerService, LoginService ]
})

export class AppComponent { }
