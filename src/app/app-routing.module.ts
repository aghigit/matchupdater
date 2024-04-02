import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddsliderComponent } from './addslider/addslider.component';
import { EditpointtableComponent } from './editpointtable/editpointtable.component';
import { AddpointstableComponent } from './addpointstable/addpointstable.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddliveComponent } from './addlive/addlive.component';
import { AddpressComponent } from './addpress/addpress.component';
import { UpdatepressComponent } from './updatepress/updatepress.component';
import { EditliveComponent } from './editlive/editlive.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path:'', component:MainPageComponent 
  },
  {
    path:'home', component:MainPageComponent
  },
  {
    path:'register',component:SignUpComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashboard', component:DashboardComponent, canActivate:[authGuard]
  },
  {
    path:'dashboard/slider', component:AddsliderComponent,canActivate:[authGuard]
  },
  {
    path:'addpointstable', component:AddpointstableComponent,canActivate:[authGuard]
  },
  {
    path:'editpointstable/:id', component:EditpointtableComponent,canActivate:[authGuard]
  },
  {
    path:'addlive', component:AddliveComponent,canActivate:[authGuard]
  },
  {
    path:'editlive/:id', component:EditliveComponent,canActivate:[authGuard]
  },
  {
    path:'addpress',component:AddpressComponent,canActivate:[authGuard]
  },
  {
    path:'updatepress/:id',component:UpdatepressComponent,canActivate:[authGuard]
  },
  {
    path:'**', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
