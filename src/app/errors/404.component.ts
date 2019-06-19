import { Component } from '@angular/core';

@Component({
    template: `<h2 class="errorMessage spacer py-5">Not found</h2>`,
    styles: [`
        .errorMessage {
            margin-top: 150px;
            font-size: 150px;
            text-align: center;
        }
    `]
})

export class Error404Component {

}

