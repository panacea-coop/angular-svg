import {Component, DoCheck, EventEmitter, Input, KeyValueDiffer, KeyValueDiffers, OnInit, Output} from '@angular/core';
import {Polyline, Stroke} from '../../types';
import {SvgHelper} from '../../helpers/svghelper.service';


@Component({
  selector: 'g[svg-polyline]',
  templateUrl: 'svgpolyline.component.html',
  styles: ['']
})
export class SvgPolylineComponent implements OnInit, DoCheck {
  @Input()
  pointsString: string;

  @Input()
  polyline: Polyline;

  @Output()
  polylineMousedown: EventEmitter<{
    mouseEvent: MouseEvent;
    polyline: Polyline;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; polyline: Polyline }>();

  private differ: KeyValueDiffer<any, any>;

  constructor(
    private readonly differs: KeyValueDiffers,
    private readonly svghelper: SvgHelper
  ) {
    this.differ = this.differs.find({}).create();
  }

  ngOnInit(): void {
    if (this.polyline) {
      this.pointsString = this.svghelper.getPolyPoints(this.polyline.vertices);
    }
    if (!this.polyline.stroke) {
      this.polyline.stroke = new Stroke();
    }
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.polyline);
    if (changes) {
      this.pointsString = this.svghelper.getPolyPoints(this.polyline.vertices);
    }
  }

  onPolylineMouseDown(event: any): void {
    if (event) {
      this.polylineMousedown.emit({
        mouseEvent: event,
        polyline: this.polyline
      });
    }
  }
}
