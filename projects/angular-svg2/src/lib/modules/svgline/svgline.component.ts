import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Line, Stroke} from '../../types';


@Component({
  selector: 'g[svg-line]',
  templateUrl: 'svgline.component.html',
  styles: ['']
})
export class SvgLineComponent implements OnInit {
  @Input()
  line: Line;

  @Output()
  lineMousedown: EventEmitter<{
    mouseEvent: MouseEvent;
    line: Line;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; line: Line }>();

  @Output()
  lineMouseover: EventEmitter<{
    mouseEvent: MouseEvent;
    line: Line;
  }> = new EventEmitter<{ mouseEvent: MouseEvent; line: Line }>();

  ngOnInit(): void {
    if (!this.line.stroke) {
      this.line.stroke = new Stroke();
    }
  }

  onLineMouseDown($event: any): void {
    if ($event) {
      this.lineMousedown.emit({ mouseEvent: $event, line: this.line });
    }
  }

  onLineMouseOver($event: any): void {
    if ($event) {
      this.lineMouseover.emit({ mouseEvent: $event, line: this.line });
    }
  }
}
