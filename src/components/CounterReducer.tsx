import { useReducer } from 'react';
import { doIncreaseBy, doReset } from '../actions/actions';
import { CounterState } from '../interfaces/CounterState';
import { counterReducer } from '../reducer/counterReducer';


const INITIAL_STATE: CounterState = {
    counter : 0,
    previous: 0,
    changes : 0
}

export const CounterReducer = () => {

    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch( doReset() );
    }

    const handleIncreaseBy = ( value: number ) => {
        dispatch( doIncreaseBy( value ) );
    }

    return (
        <>
            <h1> Counter Reducer: { state.counter } - Previous: { state.previous } - Changes: { state.changes }</h1>

            <pre>
                {
                    JSON.stringify( state, null, 2)
                }
            </pre>

            <button onClick={ () => handleIncreaseBy(1) }>
                +1
            </button>

            <button onClick={ () => handleIncreaseBy(5) }>
                +5
            </button>

            <button onClick={ () => handleIncreaseBy(10) }>
                +10
            </button>

            <button onClick={ handleReset }>
                Reset
            </button>


        </>
    );
};