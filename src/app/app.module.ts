import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './blocks/root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PmMaterialModule } from './shared/material-module';
import { HomeComponent } from './home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import {HttpClientModule, HTTP_INTERCEPTORS}   from '@angular/common/http';
import {HttpClientModule}   from '@angular/common/http';
//import { AuthHeaderInterceptorService } from './core/interceptors/auth-header-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { BlocksModule } from './blocks/blocks.module';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    BlocksModule,
    CoreModule
   
],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
