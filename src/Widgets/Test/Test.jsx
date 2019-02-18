import React, { useState } from 'react';
import { Button } from 'antd';

const Test = (props) => {
    const [state, setState] = useState({
        count: 0,
        color: '#DC0073'
    });

    const { color, count } = state;

    return (
        <div>
            <p style={props.style}>
                test
                {count}
            </p>
            <Button onClick={() => { setState({ ...state, count: count + 1}); }} type="primary">
                click
            </Button>
            <span>{color}</span>
            <Button onClick={() => { setState({ ...state, color: '#ffffff' }); }} type="primary">
                click color
            </Button>
        </div>
    );
};

export default Test;
