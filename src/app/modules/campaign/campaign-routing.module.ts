import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignComponent } from 'src/app/components/campaign/campaign.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard/campaign/team', pathMatch: 'full'},
  {path: 'team', component: CampaignComponent, loadChildren: '../../modules/team-management/team-management.module#TeamManagementModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
