import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from 'src/app/components/configuration/configuration.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [ConfigurationComponent],
  imports: [
    CommonModule,
    DashboardModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
