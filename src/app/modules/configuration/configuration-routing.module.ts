import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from 'src/app/components/configuration/configuration.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard/config/help', pathMatch: 'full'},
  {path: 'help', component: ConfigurationComponent, loadChildren: '../../modules/help/help.module#HelpModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
