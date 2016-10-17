import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        EventsComponent,
        SpeakersComponent
    ],
    exports: [ AppComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
