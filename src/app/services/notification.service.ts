import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
    constructor(private toastr: ToastrService) { }

    success(message: string, title?: string) {
        this.toastr.success(message, title);
    }

    warning(message: string, title?: string) {
        this.toastr.warning(message, title);
    }

    error(message: string, title?: string) {
        this.toastr.error(message, title);
    }

    info(message: string, title?: string) {
        this.toastr.info(message, title);
    }
}
/*
This can't be realized bcz now ToastrService exists so I just imported it.
So we are here basically creating a token that we can use in dependency injection.
Angular can use that token to find an instance of the service that we want.

In the past Toastr wasn't a service, and people used to:
declare let toastr: any; or const toastr: Toastr = window.toastr;
(bcz toastr was declared on a window as a library!!)
in order to use it's methods. It was bad to make global variables (which declare does)
for many reasons, so in order to fix it, this guy used Injection token and an interface.
He moved that declare statement to app.module (bcz it's only okay to use global variable in app.module)
and in providers we typed: { provide: TOASTR_TOKEN, useValue: toastr }
so whenever we want to injet toastr, Angular will get it with the help of Token.
This is all done bcz toastr was a variable, and we couldn't just register it with providers as a service.

import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');
export interface Toastr {
    success(msg: string, title?: string): void;
    info(msg: string, title?: string): void;
    warning(msg: string, title?: string): void;
    error(msg: string, title?: string): void;
}
*/
