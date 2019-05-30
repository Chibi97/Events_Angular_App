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
