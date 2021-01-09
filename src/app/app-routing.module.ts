import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindUserComponent } from './find-user/find-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewAllUserComponent } from './view-all-user/view-all-user.component';


const routes: Routes = [
  {path:'loginLink',component:LoginComponent},
  {path:'registerLink',component:RegisterComponent},
  {path:'viewAllLink',component:ViewAllUserComponent},
  {path:'findUserLink',component:FindUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
