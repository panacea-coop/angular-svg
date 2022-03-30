import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Rectangle, Stroke} from '../../types';


@Component({
  selector: 'g[svg-rect]',
  templateUrl: 'svgrect.component.html',
  styles: ['']
})
export class SvgRectComponent implements OnInit {
  @Input()
  rectangle: Rectangle;

  @Output()
  rectangleMousedown: EventEmitter<{
    mouseEvent: MouseEvent;
    rectangle: Rectangle;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; rectangle: Rectangle }>();

  @Output()
  rectangleMouseover: EventEmitter<{
    mouseEvent: MouseEvent;
    rectangle: Rectangle;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; rectangle: Rectangle }>();

  ngOnInit(): void {
    if (!this.rectangle.stroke) {
      this.rectangle.stroke = new Stroke();
    }
  }

  onRectangleMouseDown($event: any): void {
    if ($event) {
      this.rectangleMousedown.emit({ mouseEvent: $event, rectangle: this.rectangle });
    }
  }

  onRectangleMouseOver($event: any): void {
    if ($event) {
      this.rectangleMouseover.emit({mouseEvent: $event, rectangle: this.rectangle});
    }
  }
}
