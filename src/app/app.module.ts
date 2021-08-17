import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitService, initializeApp } from './core/services/initializer/app-init.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
