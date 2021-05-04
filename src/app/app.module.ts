import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafeLinkModule } from './safe-link/safe-link.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
    // SafeLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
