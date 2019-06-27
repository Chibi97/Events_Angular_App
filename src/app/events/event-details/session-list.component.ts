import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        // will be called every time either of @Inputs gets a new value
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0); // cloning the array
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }
}
