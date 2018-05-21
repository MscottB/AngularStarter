//Base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//i18n
import { LOCALE_ID } from '@angular/core';
import localeEsCl from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import localeEsClExtra from '@angular/common/locales/extra/es-CL';
registerLocaleData(localeEsCl, 'es-CL', localeEsClExtra);
//Routing
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
