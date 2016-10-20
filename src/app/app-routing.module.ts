import { NgModule }     from '@angular/core';
import { RouterModule,  } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'events', component: EventsComponent },
            { path: 'login', component: LoginComponent },
            { path: '', redirectTo: '/login', pathMatch: 'full' }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
