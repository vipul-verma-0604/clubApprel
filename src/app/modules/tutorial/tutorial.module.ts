import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from 'src/app/components/tutorial/tutorial.component';

@NgModule({
  declarations: [TutorialComponent],
  imports: [
    CommonModule,
    TutorialRoutingModule
  ]
})
export class TutorialModule { }
