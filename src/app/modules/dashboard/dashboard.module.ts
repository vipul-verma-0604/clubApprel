import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { CrumbsComponent } from 'src/app/components/crumbs/crumbs.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, MenuComponent, SidebarComponent, CrumbsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    SidebarComponent,
    CrumbsComponent
  ]
})
export class DashboardModule { }
