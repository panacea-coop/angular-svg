import {Component} from '@angular/core';
import {Polygon, Polyline} from 'angular-svg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public testPolygon: Polygon = new Polygon();
  public testPolyline: Polyline = new Polyline();

  title = 'demo-page';

  constructor() {
    this.testPolygon.vertices = [
      {x: 200, y: 0},
      {x: 300, y: 0},
      {x: 300, y: 100},
      {x: 200, y: 100},
    ];

    this.testPolyline.vertices = [
      {x: 0, y: 200},
      {x: 100, y: 200},
      {x: 100, y: 300},
    ];
  }
}
