import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { StoreModule, Store, select } from '@ngrx/store';
import { CounterReducer, State } from '../store/reducers/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from '../store/effects/counter.effects';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ParentComponent,
        ChildComponent
      ],
      imports: [
        StoreModule.forRoot({count: CounterReducer}),
        EffectsModule.forRoot([CounterEffects])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output numbers', () => {
    const low = fixture.nativeElement.querySelector('#low');
    const high = fixture.nativeElement.querySelector('#high');

    store.pipe(select('count')).subscribe((val: State) => {
      expect(Number(low.textContent)).toEqual(val.low);
      expect(Number(high.textContent)).toEqual(val.high);
    });
  });
});
