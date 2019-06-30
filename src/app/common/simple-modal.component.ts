import { Component, Input, Output, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgTemplateOutlet } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-simple-modal',
    templateUrl: './simple-modal.component.html'
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() autoclose: string;
    @ViewChild('content') public content: ElementRef;
    // local ref variable from html taken here

    constructor(private modalService: NgbModal) {

    }

    closeModal() {
        if (this.autoclose.toLocaleLowerCase() === 'true') {
            this.modalService.dismissAll(this.content);
        }
    }
}
