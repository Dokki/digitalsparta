import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Event } from './event.model';

@Injectable()
export class EventService {
    constructor(private http: Http) { }

    getEvents(): Observable<Event[]> {
        return this.http.get('/events.json').map((res) => res.json()).catch(this.handleError)
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
