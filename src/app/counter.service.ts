import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { Store } from '@ngrx/store';
import { increase, decrease, reset, change } from './store/actions/counter.actions';
import { State } from './store/reducers/counter.reducer';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _appStarted = false;
  public counterSubscription;
  private secondsCounter = interval(1000);

  constructor(private store: Store<State>) { }

  start = () => {
    if (this._appStarted) return;

    this.counterSubscription = this.secondsCounter
      .subscribe(()=> {
        this.store.dispatch(change());
    });

    this._appStarted = true;
  }

  stop = () => {
    this.counterSubscription.unsubscribe();
    this._appStarted = false;
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}