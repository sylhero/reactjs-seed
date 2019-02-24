import React, { useState } from 'react';

const Hook = () => {
    const [state, setState] = useState({
        count: 0,
        color: '#DC0073'
    });

    const { color, count } = state;

    return (
        <div>
            <p>
                test
                {count}
            </p>
            <button onClick={() => { setState({ ...state, count: count + 1}); }} type="button">
                click
            </button>
            <span>{color}</span>
            <button onClick={() => { setState({ ...state, color: '#ffffff' }); }} type="button">
                click color
            </button>
        </div>
    );
};

export default Hook;
