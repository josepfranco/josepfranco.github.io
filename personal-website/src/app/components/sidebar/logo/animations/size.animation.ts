import { animate, state, style, transition, trigger } from '@angular/animations';
import {SizeState} from '../models/SizeState';


export const sizeAnimation =
  trigger('sizeAnimation',
    [
      state(SizeState.Collapsed, style({
        'font-size': '1rem'
      })),
      state(SizeState.Expanded, style({
        'font-size': '3rem'
      })),
      transition(
        `${SizeState.Collapsed} <=> ${SizeState.Expanded}`,
        [
          animate('0.25s ease-in-out')
        ]
      )
    ]
  );
