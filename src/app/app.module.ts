import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { MaterialModule } from './material.module';
import { AppRoutes } from './app.routes';

import { ServerService } from './_services/server.service';
import { SocketService } from './_services/socket.service';
import { FirebaseService } from './_services/firebase.service';
import { SessionService } from './_services/session.service'

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';


import { environment } from './../environments/environment';
import { QuestionviewComponent } from './questionview/questionview.component';
import { AskComponent } from './ask/ask.component';
import { ChatComponent } from './chat/chat.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';

import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginComponent,
    RegisterComponent,
    AppNavbarComponent,
    QuestionviewComponent,
    AskComponent,
    ChatComponent,
    EditPostComponent,
    DeletePostComponent
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
    FormsModule,

  ],
  providers: [ServerService, SocketService, FirebaseService, AngularFireDatabase, SessionService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
