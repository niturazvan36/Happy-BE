import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import {MenuItem} from 'primeng/api';

import {MessageService} from 'primeng/api';
import {PollDemo} from './polldemo';
import {Poll} from './poll';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DialogService, MessageService]
})
export class AppComponent {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
      label:'Profile',
      icon:'pi pi-fw pi-user',
      },
      {
        label:'Create poll',
        icon:'pi pi-fw pi-pencil',
        command: () => this.showPoll()
      },

      {
        separator:true
      },
      {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
      }
    ];
  }

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  ref: DynamicDialogRef;
  showPoll() {
    this.ref = this.dialogService.open(PollDemo, {
      header: 'Create Poll',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: Poll) =>{
      if (product) {
        this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
      }
    });
  }
  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
