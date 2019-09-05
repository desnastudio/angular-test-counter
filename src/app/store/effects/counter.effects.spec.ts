import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { CounterEffects } from './counter.effects';
import { change, increase, decrease } from '../actions/counter.actions';

describe('Counter Effects', () => {
    let actions: Observable<any>;
    let effects: CounterEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CounterEffects,
                provideMockActions(() => actions)
            ]
        });

        effects = TestBed.get(CounterEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    it('should work', () => {
        const action = change();
    
        actions = hot('--a-', { a: action });
    
        const expected = cold('--(bcd)', {
          b: increase(),
          c: decrease(),
          d: decrease()
        });
    
        expect(effects.changeCounter$).toBeObservable(expected);
    });
});