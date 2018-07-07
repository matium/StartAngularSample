import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

    /* 入力ボックスのPlaceholderに適用するテキスト */
    @Input() placeholder: string;
    /* コンテンツに反映するテキストが入力された時のイベント */
    @Output() inputReflectedText = new EventEmitter<string>();

    /* ラベル部分に適用する文字列 */
    public labelText = 'Input Your Text';

    /**
     * テキスト入力時のイベントリスナー
     * @param {string} inputStr 入力された文字列
     */
    onInput = (inputStr: string): void => {
        // inputReflectedTextイベントで入力された文字列を渡す
        this.inputReflectedText.emit(inputStr);
    }
}
