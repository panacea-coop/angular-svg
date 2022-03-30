import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgPolygonComponent} from './svgpolygon.component';

@NgModule({
  declarations: [
    SvgPolygonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgPolygonComponent
  ]
})
export class SvgPolygonModule {
}
