import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import * as Crypto from "crypto-js";
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { EventService } from './events/shared/event.service';
import { SpeakerService } from './speakers/shared/speaker.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ EventService, SpeakerService ]
})

export class AppComponent {
    login: string;
    password: string;
    token: string;

    config = {
        appId: 48231,
        auth_key: 'EeqhcgLW-qZPTqN',
        auth_secret: 'yXP6ejeahQXqnPY'
    }

    constructor(private http: Http){
        this.login = 'test_admin';
        this.password = 'password';

        this.getToken(http).subscribe((obj) => localStorage.setItem('auth_token', obj.session.token));
    }

    getToken(http: Http): Observable<any>{
        let headers = new Headers({
            'Content-Type': 'application/json',
            'QuickBlox-REST-API-Version': '0.1.0'
        });
        let options = new RequestOptions({headers: headers});
        let timestamp = Math.round(Date.now()/1000);
        let queryString = "application_id="+this.config.appId+"&auth_key="+this.config.auth_key+"&nonce=33432&timestamp="+timestamp+"&user[login]="+this.login+"&user[password]="+this.password;
        console.log(queryString);
        let signature = Crypto.HmacSHA1(queryString, this.config.auth_secret).toString();
        let body = {
            "application_id": this.config.appId,
            "auth_key": this.config.auth_key,
            "nonce": 33432,
            "timestamp": timestamp,
            "signature": signature,
            "user": {
                "login": this.login,
                "password": this.password
            }
        };
        console.log(body);
        return http.post('https://api.quickblox.com/session.json', body, options).map((res) => res.json())
    }
}
