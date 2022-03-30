import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Circle, Stroke} from '../../types';


@Component({
  selector: 'g[svg-circle]',
  templateUrl: 'svgcircle.component.html',
  styles: ['']
})
export class SvgCircleComponent implements OnInit {
  @Input()
  circle: Circle;

  @Output()
  circleMousedown: EventEmitter<{
    mouseEvent: MouseEvent;
    circle: Circle;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; circle: Circle }>();

  @Output()
  circleMouseover: EventEmitter<{
    mouseEvent: MouseEvent;
    circle: Circle;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; circle: Circle }>();

  ngOnInit(): void {
    if (!this.circle.stroke) {
      this.circle.stroke = new Stroke();
    }
  }

  onCircleMouseDown($event: any): void {
    if ($event) {
      this.circleMousedown.emit({mouseEvent: $event, circle: this.circle});
    }
  }

  onCircleMouseOver($event: any): void {
    if ($event) {
      this.circleMouseover.emit({mouseEvent: $event, circle: this.circle});
    }
  }
}
