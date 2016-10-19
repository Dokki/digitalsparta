import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EventsComponent } from './events/events.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        EventsComponent,
        SpeakersComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
