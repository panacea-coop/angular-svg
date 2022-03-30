import {Component, DoCheck, EventEmitter, Input, KeyValueDiffer, KeyValueDiffers, OnInit, Output} from '@angular/core';
import {Polygon, Stroke} from '../../types';
import {SvgHelper} from '../../helpers/svghelper.service';


@Component({
  selector: 'g[svg-polygon]',
  templateUrl: 'svgpolygon.component.html',
  styles: ['']
})
export class SvgPolygonComponent implements OnInit, DoCheck {
  @Input()
  pointsString: string;

  @Input()
  polygon: Polygon;

  @Output()
  polygonMousedown: EventEmitter<{
    mouseEvent: MouseEvent;
    polygon: Polygon;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; polygon: Polygon }>();

  @Output()
  polygonMouseover: EventEmitter<{
    mouseEvent: MouseEvent;
    polygon: Polygon;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; polygon: Polygon }>();

  private differ: KeyValueDiffer<any, any>;

  constructor(
    private readonly differs: KeyValueDiffers,
    private readonly svghelper: SvgHelper
  ) {
    this.differ = this.differs.find({}).create();
  }

  ngOnInit(): void {
    if (this.polygon && this.pointsString == null) {
      this.pointsString = this.svghelper.getPolyPoints(this.polygon.vertices);
    }
    if (!this.polygon.stroke) {
      this.polygon.stroke = new Stroke();
    }
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.polygon);
    if (changes) {
      this.pointsString = this.svghelper.getPolyPoints(this.polygon.vertices);
    }
  }

  onPolygonMouseDown($event: any): void {
    if ($event) {
      this.polygonMousedown.emit({mouseEvent: $event, polygon: this.polygon});
    }
  }

  onPolygonMouseOver($event: any): void {
    if ($event) {
      this.polygonMouseover.emit({mouseEvent: $event, polygon: this.polygon});
    }
  }
}
