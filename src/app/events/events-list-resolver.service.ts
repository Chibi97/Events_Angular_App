import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventService) {}
    resolve() {
        return this.eventService.getEvets();
        // http call won't happen until someone subscribes to it
        // resolver subscribes automatically cuz its a resolver

        // .pipe(map(events => events));
        /* eventService returns observable, and we need to
        actually return an obserable here so that angular can watch
        the observable and see when it finishes.

        if we were to call subscribe() here, the val that'd be
        returned wouldn't be observable, but a subscription.
        Map helps us pack events as observable and return it.
        */
    }
}
