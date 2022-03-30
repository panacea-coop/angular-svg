import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ellipse, Stroke} from '../../types';


@Component({
  selector: 'g[svg-ellipse]',
  templateUrl: 'svgellipse.component.html',
  styles: ['']
})
export class SvgEllipseComponent implements OnInit {
  @Input()
  ellipse: Ellipse;

  @Output()
  ellipseMousedown: EventEmitter<{
    mouseEvent: MouseEvent;
    ellipse: Ellipse;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; ellipse: Ellipse; }>();

  @Output()
  ellipseMouseover: EventEmitter<{
    mouseEvent: MouseEvent;
    ellipse: Ellipse;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; ellipse: Ellipse; }>();

  ngOnInit(): void {
    if (!this.ellipse.stroke) {
      this.ellipse.stroke = new Stroke();
    }
  }

  onEllipseMouseDown($event: any): void {
    if ($event) {
      this.ellipseMousedown.emit({mouseEvent: $event, ellipse: this.ellipse});
    }
  }

  onEllipseMouseOver($event: any): void {
    if ($event) {
      this.ellipseMouseover.emit({mouseEvent: $event, ellipse: this.ellipse});
    }
  }
}
