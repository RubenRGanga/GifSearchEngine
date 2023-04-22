import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'

import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ImgCardComponent } from './components/img-card/img-card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';




@NgModule({
  declarations: [
    CardListComponent,
    HomePageComponent,
    ImgCardComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
