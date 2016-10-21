import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login/shared/login.service';
import { AuthGuard } from './auth-guard.service';

import { EventsModule } from './events/events.module';
import { SpeakersModule }         from './speakers/speakers.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        EventsModule,
        SpeakersModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [ LoginService, AuthGuard ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
