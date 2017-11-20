import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { MaterialModule } from './material.module';
import { AppRoutes } from './app.routes';

import { ServerService } from './_services/server.service';
import { SocketService } from './_services/socket.service';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';


import { environment } from './../environments/environment';
import { QuestionviewComponent } from './questionview/questionview.component';
import { AskComponent } from './ask/ask.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginComponent,
    RegisterComponent,
    AppNavbarComponent,
    QuestionviewComponent,
    AskComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [ServerService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
