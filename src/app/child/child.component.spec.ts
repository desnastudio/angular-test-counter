import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { Store, StoreModule } from '@ngrx/store';
import { State, CounterReducer } from '../store/reducers/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from '../store/effects/counter.effects';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let store: Store<State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ],
      imports: [
        StoreModule.forRoot({count: CounterReducer}),
        EffectsModule.forRoot([CounterEffects])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output value', () => {
    const el = fixture.nativeElement.querySelector('h2');

    component.count = -5;
    fixture.detectChanges();
    expect(el.textContent).toContain(-5);
  });

  it('should highlight red', () => {
    const el = fixture.nativeElement.querySelector('h2');

    component.count = -20;
    fixture.detectChanges();

    expect(el.getAttribute('class')).toContain('lower');
  });

  it('should highlight blue', () => {
    const el = fixture.nativeElement.querySelector('h2');

    component.count = 20;
    fixture.detectChanges();

    expect(el.getAttribute('class')).toContain('higher');
  });
});
