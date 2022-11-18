import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

// Change app locale
import localeEs from '@angular/common/locales/es-AR';
import localeBel from '@angular/common/locales/fr-BE';
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEs);
registerLocaleData(localeBel);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    SalesModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'en'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
