import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-reflected-text',
    templateUrl: './reflected-text.component.html'
})
export class ReflectedTextComponent {

    @Input() contentsText: string;

    constructor() { }
}
