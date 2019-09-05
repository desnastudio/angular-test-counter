import { CounterService } from '../../counter.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concat } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { increase, decrease, change } from '../actions/counter.actions';

@Injectable()
export class CounterEffects {

  constructor(private actions$: Actions) { }

  changeCounter$ = createEffect(() => this.actions$.pipe(
    ofType(change),
    mergeMap(() => [increase(), decrease(), decrease()])
  ));
}