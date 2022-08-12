import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabsComponent } from './tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DecorsComponent } from './decors/decors.component';

import {
  DialogOverviewExample,
  DialogOverviewExampleDialog,
} from './popup/dialog-overview-example';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TabsComponent,
    DecorsComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
