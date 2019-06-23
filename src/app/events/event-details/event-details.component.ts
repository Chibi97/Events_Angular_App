import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/index';

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
    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
        // with "+" we are casting string value into int (bcz url is string)
        // our dependency "route" can give us params from the url by their placeholder in routes.ts!
    }

    addSession() {
        this.addMode = true;
    }

    showSessions() {
        this.addMode = false;
    }
}
