import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsModule} from './products/products.module';
import {AuthModule} from  './auth/auth.module';
 const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  

   },
   {
    path:'home',
    pathMatch:'full',
    component:HomeComponent

   },
  {
  path:'products',
  loadChildren:'./products/products.module#ProductsModule'
 },
 {
   path:'auth',
   loadChildren:'./auth/auth.module#AuthModule'
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
