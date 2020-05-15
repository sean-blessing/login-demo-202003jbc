import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { WelcomeComponent } from './feature/welcome/welcome.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}, 
  {path: 'welcome', component: WelcomeComponent}, 
  {path: 'user/login', component: UserLoginComponent}, 
  {path: '**', component: HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
