import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const fadeInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // transform all elements to be animated
      query(':enter, :leave', [
        style( {
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)'
        })
      ]),
      // elements that are now entering
      query(':enter', [
        animate('300ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)'}))
      ])
    ])
  ]);
