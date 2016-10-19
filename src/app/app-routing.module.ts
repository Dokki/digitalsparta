import { NgModule }     from '@angular/core';
import { RouterModule,  } from '@angular/router';

import { EventsComponent } from './components/events/events.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'events', component: EventsComponent },
            { path: 'speakers', component: SpeakersComponent },
            { path: 'login', component: LoginComponent },
            { path: '', redirectTo: '/login', pathMatch: 'full' }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
