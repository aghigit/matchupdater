import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddsliderComponent } from './addslider/addslider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PointTableComponent } from './point-table/point-table.component';
import { EditpointtableComponent } from './editpointtable/editpointtable.component';
import { AddpointstableComponent } from './addpointstable/addpointstable.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddliveComponent } from './addlive/addlive.component';
import { AddpressComponent } from './addpress/addpress.component';
import { UpdatepressComponent } from './updatepress/updatepress.component';
import { EditliveComponent } from './editlive/editlive.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { InterceptorService } from './interceptor.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    AddsliderComponent,
    PointTableComponent,
    EditpointtableComponent,
    AddpointstableComponent,
    MainPageComponent,
    AddliveComponent,
    AddpressComponent,
    UpdatepressComponent,
    EditliveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    NgxSpinnerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
