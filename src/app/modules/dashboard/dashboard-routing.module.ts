import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard/campaign', pathMatch: 'full'},
  {path: 'campaign', component: DashboardComponent, loadChildren: '../../modules/campaign/campaign.module#CampaignModule'},
  {path: 'config', component: DashboardComponent, loadChildren: '../../modules/configuration/configuration.module#ConfigurationModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
