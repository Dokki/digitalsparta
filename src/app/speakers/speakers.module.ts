import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { SpeakerListComponent }    from './speaker-list.component';
import { SpeakerDetailComponent }  from './speaker-detail.component';
import { SpeakerService } from './shared/speaker.service';
import { SpeakerRoutingModule } from './speakers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SpeakerRoutingModule
  ],
  declarations: [
    SpeakerListComponent,
    SpeakerDetailComponent
  ],
  providers: [
    SpeakerService
  ]
})

export class SpeakersModule {}
