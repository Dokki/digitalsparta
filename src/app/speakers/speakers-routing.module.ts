import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';
import { SpeakerListComponent }    from './speaker-list.component';
import { SpeakerDetailComponent }  from './speaker-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'speakers',  component: SpeakerListComponent, canActivate: [AuthGuard] },
      { path: 'speaker/:id', component: SpeakerDetailComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class SpeakerRoutingModule { }
