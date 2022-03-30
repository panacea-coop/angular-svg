export class Stroke {
  fill: string;
  strokeFill: string;
  dashArray: number;
  thickness: number;
  opacity: number;

  constructor(fill?: string, strokeFill?: string, dashArray?: number, thickness?: number, opacity?: number) {
    this.fill = fill != null ? fill : 'transparent';
    this.strokeFill = strokeFill != null ? strokeFill : 'black';
    this.dashArray = dashArray != null ? dashArray : 0;
    this.thickness = thickness != null ? thickness : 1;
    this.opacity = opacity != null ? opacity : 1;
  }
}
