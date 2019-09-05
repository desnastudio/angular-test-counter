import { increase, decrease, change, reset } from '../actions/counter.actions';
import * as reducer from './counter.reducer';
import { Action } from '@ngrx/store';

describe('CounterReducer', () => {
    describe('unhadeled acton', () => {
        it('it should return default state', () => {
            const initialState = {low: -5, high: 10};
            const action: Action = {} as Action;
            const state = reducer.CounterReducer(undefined, action);

            expect(state).toEqual(initialState);
        })
    });

    describe('change action', () => {
        it('it should return unchaged state', () => {
            const initialState = {low: -5, high: 10};
            const action: Action = change;
            const state = reducer.CounterReducer(initialState, action);

            expect(state).toEqual(initialState);
        })
    });

    describe('increase action', () => {
        it('it should increase low variable by 1', () => {
            const initialState = {low: -5, high: 10};
            const action: Action = increase;
            const state = reducer.CounterReducer(initialState, action);
    
            expect(state.low).toBe(++initialState.low);
        });
    });

    describe('decrease action', () => {
        it('it should decrease high variable by 1', () => {
            const initialState = {low: -5, high: 10};
            const action: Action = decrease;
            const state = reducer.CounterReducer(initialState, action);
    
            expect(state.high).toBe(--initialState.high);
        });
    });

    describe('reset action', () => {
        it('it should reset current state to initial', () => {
            const initialState = {low: -5, high: 10};
            const currentState = {low: -4, high: 8};
            const action: Action = reset;
            const state = reducer.CounterReducer(currentState, action);

            expect(state).toEqual(initialState);
        });
    });
});