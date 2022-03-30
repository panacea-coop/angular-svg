import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgEllipseComponent} from './svgellipse.component';

@NgModule({
  declarations: [
    SvgEllipseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgEllipseComponent
  ]
})
export class SvgEllipseModule {
}
