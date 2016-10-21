import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Event } from './event.model';

@Injectable()
export class EventService {
    constructor(private http: Http) { }

    getEvents(): Observable<Event[]> {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'QuickBlox-REST-API-Version': '0.1.0',
            'QB-token': localStorage.getItem('auth_token')
        });
        let options = new RequestOptions({headers: headers});
        return this.http.get('https://api.quickblox.com/data/Event.json', options).map((res) => res.json().items).catch(this.handleError)
    }

    getEvent(id: string): Observable<Event> {
        return this.getEvents().map(events => events.find(event => event._id === id));
    }

    updateEvent(event: Event): Observable<Event> {
        let headers = new Headers({
            'QB-token': localStorage.getItem('auth_token')
        });
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(event);
        let url = 'https://api.quickblox.com/data/Event/'+event._id+'.json';
        return this.http.put(url, body, options).map((res) => res.json()).catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
