import {Injectable} from '@angular/core';
import {Vertex} from '../types';

@Injectable({
  providedIn: 'root'
})
export class SvgHelper {
  getPolyPoints(points: Vertex[]): string {
    return points.map(p => p.x.toString() + ' ' + p.y.toString()).join(' ');
  }
}
