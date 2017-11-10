import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { AppRoutes } from './app.routes';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

import { ServerService } from './_services/server.service';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
