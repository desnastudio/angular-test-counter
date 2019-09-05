import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { CounterService } from './counter.service';
import { CounterReducer, State } from './store/reducers/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/effects/counter.effects';
import { change, reset } from './store/actions/counter.actions';

describe('CounterService', () => {
  let store: Store<State>;
  let service: CounterService

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({count: CounterReducer}),
      EffectsModule.forRoot([CounterEffects])
    ]
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    service = TestBed.get(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start counter and dispatch "change" action', fakeAsync(() => {
    service.start();
    tick(1000);
    expect(store.dispatch).toHaveBeenCalledWith(change());

    service.counterSubscription.unsubscribe();
  }));

  it('stop should remove inteval subscription', fakeAsync(() => {
    service.start();
    tick(1000);
    service.stop();
    expect(service.counterSubscription.closed).toBeTruthy();
  }));

  it('should dispatch "reset" action', fakeAsync(() => {
    service.start();
    tick(1000);
    service.reset();
    expect(store.dispatch).toHaveBeenCalledWith(reset());
    
    service.counterSubscription.unsubscribe();
  }));
});
