import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from 'src/app/components/team/team.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard/campaign/team/viewtemplate', pathMatch: 'full'},
  {path: 'viewtemplate', component: TeamComponent, loadChildren: '../../modules/view-templates/view-templates.module#ViewTemplatesModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamManagementRoutingModule { }
