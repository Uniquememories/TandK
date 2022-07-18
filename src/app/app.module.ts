import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MerchComponent } from './merch/merch.component';
import { MerchListComponent } from './merch/merch-list/merch-list.component';
import { MerchDetailComponent } from './merch/merch-detail/merch-detail.component';
import { MerchItemComponent } from './merch/merch-list/merch-item/merch-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MerchComponent,
    MerchListComponent,
    MerchDetailComponent,
    MerchItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
