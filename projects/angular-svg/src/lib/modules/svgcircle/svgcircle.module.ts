import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgCircleComponent} from './svgcircle.component';

@NgModule({
  declarations: [
    SvgCircleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgCircleComponent
  ]
})
export class SvgCircleModule {
}
