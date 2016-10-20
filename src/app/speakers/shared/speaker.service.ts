import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Speaker } from './speaker.model';

@Injectable()
export class SpeakerService {
    constructor(private http: Http) { }

    getSpeakers(): Observable<Speaker[]> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'QuickBlox-REST-API-Version': '0.1.0',
            'QB-token': localStorage.getItem('auth_token')
        });
        let options = new RequestOptions({headers: headers});
        return this.http.get('https://api.quickblox.com/data/Speaker.json', options).map((res) => res.json().items).catch(this.handleError)
    }

    getSpeaker(id: string) {
        return this.getSpeakers().map(speakers => speakers.find(speaker => speaker.id === id));
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
