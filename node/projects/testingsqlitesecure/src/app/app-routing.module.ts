import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SqlfrontComponent } from './sqlfront/sqlfront.component';


const routes: Routes = [
  {path: '', component: SqlfrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
