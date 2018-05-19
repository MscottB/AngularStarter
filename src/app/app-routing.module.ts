import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }