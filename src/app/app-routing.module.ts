import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SecureComponent } from './components/secure/secure.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "secure", component: SecureComponent },
  { path: "", pathMatch: "full", redirectTo: "/login" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
