import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabsComponent } from './tabs/tabs.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule, BrowserAnimationsModule],
  declarations: [AppComponent, HelloComponent, TabsComponent, TestComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
