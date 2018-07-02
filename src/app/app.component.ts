import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public placeholderText: string;
    public contentsText: string;

    constructor() {
        this.placeholderText = '(´･_･`)';
        this.contentsText = this.placeholderText;
    }

    reflectText = (text: string): void => {
        this.contentsText = text;
    }
}
