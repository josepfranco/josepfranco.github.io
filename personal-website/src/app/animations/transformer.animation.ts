import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const transformAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', translateTo({ x: 0, y: 100, rotate: 0 }))
  ]);

function translateTo({x = 0, y = 0, rotate = 0}): any {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: 'calc(100% - 80px)'
      })
    ], optional),
    query(':enter', [
      style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`, opacity: 1})
    ]),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`, opacity: 0}))
      ], optional),
      query(':enter', [
        animate('300ms ease-out', style({ transform: `translate(0, 0) rotate(0deg)`, opacity: 1}))
      ], optional)
    ]),
  ];
}
