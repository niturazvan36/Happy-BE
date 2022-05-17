import {Component} from '@angular/core';
import {Poll} from './poll';
import {PollService} from './pollservice';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  template: `
    <h5>Poll Title</h5>
    <span class="p-float-label">
    <input id="float-input" type="text" pInputText>
    <label for="float-input">Poll Title</label>
    </span>
    <br>
    <h5>Poll description</h5>
    <textarea [rows]="10" [cols]="120" pInputTextarea autoResize="autoResize"></textarea>
    <br><br>
    <p-button label="Submit poll" icon="pi pi-check" iconPos="left"></p-button>
    `
})
export class PollDemo {


}
