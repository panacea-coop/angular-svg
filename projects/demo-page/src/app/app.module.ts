import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SvgCircleModule} from "../../../angular-svg/src/lib/modules/svgcircle/svgcircle.module";
import {SvgEllipseModule} from "../../../angular-svg/src/lib/modules/svgellipse/svgellipse.module";
import {SvgLineModule} from "../../../angular-svg/src/lib/modules/svgline/svgline.module";
import {SvgPathModule} from "../../../angular-svg/src/lib/modules/svgpath/svgpath.module";
import {SvgTextModule} from "../../../angular-svg/src/lib/modules/svgtext/svgtext.module";
import {SvgRectModule} from "../../../angular-svg/src/lib/modules/svgrect/svgrect.module";
import {SvgPolygonModule} from "../../../angular-svg/src/lib/modules/svgpolygon/svgpolygon.module";
import {SvgPolylineModule} from "../../../angular-svg/src/lib/modules/svgpolyline/svgpolyline.module";

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
