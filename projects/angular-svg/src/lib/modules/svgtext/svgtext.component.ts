import {Component, Input} from '@angular/core';
import {TextFont} from '../../types';


@Component({
  selector: 'g[svg-text]',
  templateUrl: 'svgtext.component.html',
  styles: ['']
})
export class SvgTextComponent {
  @Input()
  x: number = null;

  @Input()
  y: number = null;

  @Input()
  transform: number = null;

  @Input()
  fontStyle: TextFont = null;
}
