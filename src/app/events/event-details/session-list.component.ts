import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'app-session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    authenticatedValue: string;
    visibleSessions: ISession[] = [];

    constructor(private auth: AuthService, private voterService: VoterService) { }

    ngOnChanges() {
        // will be called every time either of @Inputs gets a new value
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortSessionsBy(this.sortBy);
        }
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.auth.currentUser.userName);
        }

        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(this.sortByVotesDesc);
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
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

    sortSessionsBy(sortBy) {
        if (this.sortBy === 'name') {
            this.visibleSessions.sort(this.sortByNameAsc);
        } else {
            this.visibleSessions.sort(this.sortByVotesDesc);
        }

    }

    sortByNameAsc(a: ISession, b: ISession) {
        if (a.name > b.name) {
            return 1;
        } else if (a.name === b.name) {
            return 0;
        } else { return -1; }
    }

// tslint:disable-next-line: no-shadowed-variable
    sortByVotesDesc(first: ISession, second: ISession) {
        return second.voters.length - first.voters.length;
        // less votes: negative number
    }
}
