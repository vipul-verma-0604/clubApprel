import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTemplatesRoutingModule } from './view-templates-routing.module';
import { ViewTemplateComponent } from 'src/app/components/view-template/view-template.component';
import { AddtemplateComponent } from 'src/app/components/addtemplate/addtemplate.component';
import { ListtemplateComponent } from 'src/app/components/listtemplate/listtemplate.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewTemplateComponent, AddtemplateComponent, ListtemplateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ViewTemplatesRoutingModule,
    UiSwitchModule.forRoot({
      defaultBgColor: '#ff3600'
    })
  ]
})
export class ViewTemplatesModule { }
