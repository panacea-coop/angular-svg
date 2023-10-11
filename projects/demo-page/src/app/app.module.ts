import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
  SvgCircleModule,
  SvgEllipseModule,
  SvgLineModule,
  SvgPathModule,
  SvgPolygonModule,
  SvgPolylineModule,
  SvgRectModule,
  SvgTextModule
} from 'angular-svg';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SvgCircleModule,
    SvgEllipseModule,
    SvgLineModule,
    SvgPathModule,
    SvgPolygonModule,
    SvgPolylineModule,
    SvgRectModule,
    SvgTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
