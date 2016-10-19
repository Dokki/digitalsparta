import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import * as Crypto from "crypto-js";

@Injectable()
export class LoginService {
    private loggedIn = false;

    config = {
        appId: 48231,
        auth_key: 'EeqhcgLW-qZPTqN',
        auth_secret: 'yXP6ejeahQXqnPY'
    }

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(login: string, password: string) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'QuickBlox-REST-API-Version': '0.1.0'
        });
        let options = new RequestOptions({headers: headers});
        let timestamp = Math.round(Date.now()/1000);
        let queryString = "application_id="+this.config.appId+"&auth_key="+this.config.auth_key+"&nonce=33432&timestamp="+timestamp+"&user[login]="+login+"&user[password]="+password;
        let signature = Crypto.HmacSHA1(queryString, this.config.auth_secret).toString();
        let body = {
            "application_id": this.config.appId,
            "auth_key": this.config.auth_key,
            "nonce": 33432,
            "timestamp": timestamp,
            "signature": signature,
            "user": {
                "login": login,
                "password": password
            }
        };

        return this.http
            .post(
                'https://api.quickblox.com/session.json',
                body,
                options
            )
            .map(res => res.json())
            .map((res) => {
                console.log(res);
                if (res.session) {
                    localStorage.setItem('auth_token', res.session.token);
                    this.loggedIn = true;
                }

                return res.session;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}