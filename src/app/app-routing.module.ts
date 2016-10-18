import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'events', component: EventsComponent },
            { path: 'speakers', component: SpeakersComponent },
            {
                path: '',
                redirectTo: '/events',
                pathMatch: 'full'
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
