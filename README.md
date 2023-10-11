

## SetUp
`npm install @panacea-coop/angular-svg`

## Usage
`import {
SvgCircleModule,
SvgLineModule,
SvgPolygonModule,
SvgPolylineModule,
SvgTextModule,
SvgPathModule
} from '@panacea-coop/angular-svg'`

#Modules List :
1. SvgCricle
2. SvgText
3. SvgRectangle
4. SvgPolygon
5. SvgPolyline
6. SvgLine
7. SvgEllipse
8. SvgPath

## In Html
```html
<svg>
  // for circle
  <g svg-circle
  [circle]="circle"
  (circleMousedown)="onCircleClick($event)"></g>
  
  // for line
  <g svg-line
  [line]="line"
  (lineMousedown)="onLineClick($event)"></g>
  
  // for polygon
  <g svg-polygon
  [polygon]="polygon"
  (polygonMousedown)="onPolygonClick($event)"></g>
  
  // for polyline
  <g svg-polyline
  [polyline]="polyline"></g>
  
  // for svg path
  <g svg-path
  [path]="pathString"
  [stroke]="colorstroke"></g>
  
  // for svg text
  <g svg-text
  [text]="text">test</g>
</svg>
```

## Versions

| Library version | Angular version |
|-----------------|-----------------|
| 3.0.x           | 8.x             |
| 3.1.x           | 9.x             |
| 3.2.x           | 10.x            |
| 3.3.x           | 11.x            |
| 3.4.x           | 12.x            |
| 3.5.x           | 13.x            |
| 3.6.x           | 14.x            |
| 3.7.x           | 15.x            |
| 3.8.x           | 16.x            |

## Attributions
This library is a fork of https://www.npmjs.com/package/angular-svg from [Yaswanth Kata](https://www.npmjs.com/~yashkata) under same MIT license.
