import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { LOCALE_ID, NgModule, OnInit } from '@angular/core';
import localeESCO from '@angular/common/locales/es-CO'
import localeIT from '@angular/common/locales/it'
import{ registerLocaleData} from '@angular/common'

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

registerLocaleData(localeESCO)
registerLocaleData(localeIT)
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO'
      // useValue: 'it'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
