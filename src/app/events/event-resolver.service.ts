import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(+route.params.id);
        // we don't have to subscribe cuz its done automatically (bcz we implement Resolve interface)
    }
}
