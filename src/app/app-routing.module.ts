import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HlistComponent} from './hlist/hlist.component'

const routes: Routes = [
  { path: '', component: HlistComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
