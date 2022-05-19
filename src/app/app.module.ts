import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent }   from './app.component';
import { PollDemo } from './polldemo';
import { PollService } from './pollservice';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {FieldsetModule} from 'primeng/fieldset';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TieredMenuModule,
    ButtonModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    HttpClientModule,
    ScrollPanelModule,
    RatingModule,
    FormsModule,
    FieldsetModule

  ],
  declarations: [ AppComponent ,PollDemo],
  bootstrap:    [ AppComponent ],
  entryComponents: [
    PollDemo
  ],
  providers: [PollService]
})

export class AppModule { }
