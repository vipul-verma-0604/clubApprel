import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from 'src/app/components/campaign/campaign.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [CampaignComponent],
  imports: [
    CommonModule,
    DashboardModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
