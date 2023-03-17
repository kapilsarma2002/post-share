import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: 'signup', component: LoginComponent },
  { path: 'signin', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'post'. component:  }
  { path: 'home', redirectTo: '', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'posts', component: MyPostsComponent, canActivate: [AuthGuard]},
  { path: 'post', component: PostComponent, canActivate: [AuthGuard]},

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () => import('./my-posts/my-posts.module').then(mod => mod.MyPostsModule)
      },
      // {
      //   path: 'welcome',
      //   component: WelcomeComponent 
      // },	      	      
      // {
      //   path: '**',
      //   component: PageNotFoundComponent 
      // }	
    ]
  }, 	








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
