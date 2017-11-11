import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcademicPage } from './academic';

@NgModule({
  declarations: [
    AcademicPage,
  ],
  imports: [
    IonicPageModule.forChild(AcademicPage),
  ],
})
export class AcademicPageModule {}
