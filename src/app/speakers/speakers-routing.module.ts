import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpeakerListComponent }    from './speaker-list.component';
import { SpeakerDetailComponent }  from './speaker-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'speakers',  component: SpeakerListComponent },
      { path: 'speakers/:id', component: SpeakerDetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class SpeakerRoutingModule { }
