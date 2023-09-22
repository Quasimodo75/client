import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UploadComponent } from './pages/upload/upload.component';

const routes: Routes = [
  {path:"",component:LoginPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"home",component:HomePageComponent},
  { path: "404", component:NotFoundPageComponent},
  {path: "upload", component:UploadComponent},
  { path: "**", redirectTo: "404", pathMatch: "full" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
