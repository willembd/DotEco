import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Pages/login/login.component';
import { RecoveryComponent } from './Pages/recovery/recovery.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { RegisterComponent } from './Pages/register/register.component';
import { RequestRecycleComponent } from './Pages/request-recycle/request-recycle.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { RegistercompanyComponent } from './Pages/registercompany/registercompany.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "login/register/login", component: LoginComponent },
  { path: "login/register", component: RegisterComponent },
  { path: "login/recovery", component: RecoveryComponent },
  { path: "profile", component: ProfileComponent },
  { path: "requestrecycle", component: RequestRecycleComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "registercompany", component: RegistercompanyComponent},
  { path: "login/registercompany", component: RegistercompanyComponent},
  { path: "login/registercompany/login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
