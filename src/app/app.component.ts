import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
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
