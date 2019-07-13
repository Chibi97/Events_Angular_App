import { Injectable } from '@angular/core';
import { ISession } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class VoterService {

    constructor(private http: HttpClient) { }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters
        .filter(voter => voter !== voterName);
        const url = `api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.delete(url)
            .pipe(catchError(this.handleError<ISession>('deleteVoter')))
            .subscribe();

    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);
        const url = `api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

        this.http.post(url, {}, options)
            .pipe(catchError(this.handleError<ISession>('addVoter')))
            .subscribe(); // no one needs to be notified so we're doing it here

    }

    userHasVoted(session: ISession, voterName: string) {
        // like Any() in EF
        return session.voters.some(voter => voter === voterName);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T); // converting to observable
        };
    }
}
