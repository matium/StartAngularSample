import { Component } from '@angular/core';
import * as ViewportUnitsBuggyfill from 'viewport-units-buggyfill';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public placeholderText: string;
    public contentsText: string;

    constructor() {
        ViewportUnitsBuggyfill.init();
        window.addEventListener('resize', ViewportUnitsBuggyfill.refresh, true);
        this.placeholderText = '(´･_･`)';
        this.contentsText = this.placeholderText;
    }

    reflectText = (text: string): void => {
        if (text === '') {
            this.contentsText = this.placeholderText;
        } else {
            this.contentsText = text;
        }
    }
}
