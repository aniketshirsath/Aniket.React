import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT, DECREMENT } from '../Counter/actiontype';

const CounterButtons = () => {
    const count = useSelector((store) => store.counter.count);
    console.log(count);

    const dispatch = useDispatch();

    return (
        <div className="container" style={{ padding: "5%" }}>
            <button className='btn btn-success' onClick={() => dispatch({ type: INCREMENT })}>
                ADD
            </button>
            <button className='btn btn-success' onClick={() => dispatch({ type: DECREMENT })}>
                REDUCE
            </button>
        </div>
    );
}

export default CounterButtons;
