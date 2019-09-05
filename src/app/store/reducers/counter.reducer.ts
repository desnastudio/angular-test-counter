import { createReducer, on } from '@ngrx/store';
import { increase, decrease, reset, change } from '../actions/counter.actions';

export interface State {
    low: number;
    high: number;
};

export const initialState: State = {
    low: -5,
    high: 10,
};

const _counterReducer = createReducer(
    initialState,
    on(change, state => state ),
    on(increase, state => ({ ...state, low: state.low + 1 })),
    on(decrease, state => ({ ...state, high: state.high - 1 })),
    on(reset, state => ({...state, low: -5, high: 10 })),
);

export function CounterReducer(state, action) {
    return _counterReducer(state, action);
};