import { Component } from '@angular/core';
import * as ViewportUnitsBuggyfill from '../../node_modules/viewport-units-buggyfill/viewport-units-buggyfill';

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
        this.contentsText = text;
    }
}
