import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamManagementRoutingModule } from './team-management-routing.module';
import { TeamComponent } from 'src/app/components/team/team.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    DashboardModule,
    TeamManagementRoutingModule
  ]
})
export class TeamManagementModule { }
