import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';
import { EventListComponent }    from './event-list.component';
import { EventDetailComponent }  from './event-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'events',  component: EventListComponent, canActivate: [AuthGuard] },
      { path: 'event/:id', component: EventDetailComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class EventRoutingModule { }
