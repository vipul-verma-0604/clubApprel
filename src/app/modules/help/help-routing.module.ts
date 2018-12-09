import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from 'src/app/components/help/help.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard/config/help/tutorial', pathMatch: 'full'},
  {path: 'tutorial', component: HelpComponent, loadChildren: '../../modules/tutorial/tutorial.module#TutorialModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
