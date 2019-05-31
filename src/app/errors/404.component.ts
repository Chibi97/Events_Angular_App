import { Component } from '@angular/core';

@Component({
    template: `<h1 class="errorMessage spacer py-5">Not found</h1>`,
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

