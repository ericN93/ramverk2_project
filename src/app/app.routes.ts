import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionviewComponent } from './questionview/questionview.component';
import { AskComponent } from './ask/ask.component';

export const AppRoutes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'first', component: FirstComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'view', component: QuestionviewComponent },
  { path: 'ask', component: AskComponent }
];
