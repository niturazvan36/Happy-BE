import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import {MenuItem, PrimeNGConfig} from 'primeng/api';

import {MessageService} from 'primeng/api';
import {PollDemo} from './polldemo';
import {GRDemo} from './grdemo'
import {Poll} from './poll';
import {Grade} from './grade';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AppConfig } from './appconfig';
import { AppConfigService } from './appconfigservice';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DialogService, MessageService],
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  val1: number;
  val2: number;
  val3: number;
  val4: number;
  msg: string;
  items: MenuItem[];

  data: any;

  chartOptions: any;

  subscription: Subscription;

  config: AppConfig;

  constructor(private configService: AppConfigService, private primengConfig: PrimeNGConfig,
              public dialogService: DialogService, public messageService: MessageService) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
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

    this.data = {
      labels: ['1 star','2 stars','3 stars','4 stars','5 stars'],
      datasets: [
        {
          data: [1, 5, 5,5,5],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
            "#42A5F5",
            "#66BB6A",
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D",
            "#64B5F6",
            "#81C784",
          ]
        }
      ]
    };

    this.config = this.configService.config;
    this.updateChartOptions();
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
      this.updateChartOptions();
    });

  }
  updateChartOptions() {
    this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
  }

  getLightTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
    }
  }

  getDarkTheme() {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      }
    }
  }




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


  showGr() {
    this.ref = this.dialogService.open(GRDemo, {
      header: 'Poll Chart',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    });
  }
  displayPosition: boolean;

  position: string;

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

}
