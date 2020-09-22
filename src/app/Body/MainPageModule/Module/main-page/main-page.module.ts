import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainPageSkeletonComponent} from '../../Components/main-page-skeleton/main-page-skeleton.component';



@NgModule({
  declarations: [
    MainPageSkeletonComponent,
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: MainPageSkeletonComponent,
      }
    ])
  ]
})
export class MainPageModule { }
