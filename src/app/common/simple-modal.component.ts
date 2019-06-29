import { Component, Input, Output, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-simple-modal',
    templateUrl: './simple-modal.component.html'
})
export class SimpleModalComponent implements OnInit {
    // @Input() title: string;
    // @Output() content: any;
    @ViewChild('content') public content: ElementRef;

    constructor() {

    }

    ngOnInit() {
        // console.log(this.content);
    }
}
