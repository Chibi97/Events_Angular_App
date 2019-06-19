import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot) {
        // route is automatically sent as a first param
        // we need to check if the passed ID is a valid event
        const eventExist = !!this.eventService.getEvent(+route.params.id);
        // cast this result into boolean

        if (!eventExist) {
            this.router.navigate(['/notfound']);
        }
        return eventExist; // true when if we found event
    }
}
