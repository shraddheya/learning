import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule, ElectronService } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqlfrontComponent } from './sqlfront/sqlfront.component';
import { ConnectorService } from './connector.service';

@NgModule({
  declarations: [
    AppComponent,
    SqlfrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule
  ],
  providers: [ConnectorService, ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
