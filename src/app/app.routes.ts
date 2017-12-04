import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionviewComponent } from './questionview/questionview.component';
import { AskComponent } from './ask/ask.component';
import { ChatComponent } from './chat/chat.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { AuthGuard } from './guard/auth.guard';

export const AppRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'first', component: FirstComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'view/:id', component: QuestionviewComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditPostComponent, canActivate: [AuthGuard]},
  { path: 'delete/:id', component: DeletePostComponent, canActivate: [AuthGuard] },
  { path: 'ask', component: AskComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] }
];
