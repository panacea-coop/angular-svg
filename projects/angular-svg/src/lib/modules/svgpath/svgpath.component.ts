import {Component, Input, OnInit} from '@angular/core';
import {Stroke, SvgPath} from '../../types';


@Component({
  selector: 'g[svg-path]',
  templateUrl: 'svgpath.component.html',
  styles: ['']
})
export class SvgPathComponent implements OnInit {
  @Input()
  path: SvgPath;

  @Input()
  stroke: Stroke;

  ngOnInit(): void {
    if (!this.stroke) {
      this.stroke = new Stroke();
    }
  }
}
