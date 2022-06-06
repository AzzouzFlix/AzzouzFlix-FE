import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowsingComponent } from './features/browsing/browsing/browsing.component';

const routes: Routes = [
  {path:'',component:BrowsingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
