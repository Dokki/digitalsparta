import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { EventListComponent }    from './event-list.component';
import { EventDetailComponent }  from './event-detail.component';
import { EventService } from './shared/event.service';
import { EventRoutingModule } from './events-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EventRoutingModule
  ],
  declarations: [
    EventListComponent,
    EventDetailComponent
  ],
  providers: [
    EventService
  ]
})

export class EventsModule {}
