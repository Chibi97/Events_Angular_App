import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px }
        .event-image { height: 100px; }
        a { cursor: pointer }
        .tab-active { border-radius:0; border-bottom: 3px solid #AA6373; padding-bottom: 1em; }
    `]
})

// URL localhost/events/1
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy = 'all';
    orderBy = 'votes';
    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.forEach((data) => {
            // this.event = this.eventService.getEvent(+params.id); if not observable

            // this.eventService.getEvent(+params.id).subscribe((response: IEvent) => {
            //     this.event = response;
            //     this.addMode = false;
            // }); SUBSCRIPTION IS NOW DONE IN THE RESOLVER!

            this.event = data.event;
            this.addMode = false;
            /*
            When the route was resolved and EventResolver was called, it subscibed to ajax call
            and sent us data that we now accepted in "event" property. Data is available
            within route.data.
            Event gets loaded from resolver even before this component is executed!!
            */
        });
        /**
         * In order to be able to navigate through seach sessions, we nedded to actually
         * get event every time router.params.id changes. With the code below, that only
         * happend when the page loaded, now is just like async call.
         */

        // this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
        // our dependency "route" can give us params from the url by their placeholder in routes.ts!
        // with "+" we are casting string value into int (bcz url is string)
    }

    addSession() {
        this.addMode = true;
    }

    showSessions() {
        this.addMode = false;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions
            .map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
