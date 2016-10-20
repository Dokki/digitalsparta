import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EventsComponent } from './events/events.component';
import { SpeakersModule }         from './speakers/speakers.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        SpeakersModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        EventsComponent,
        LoginComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
