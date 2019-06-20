import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            firstName: 'Olja',
            lastName: 'Ivkovic',
            userName
            // userName: userName
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}
