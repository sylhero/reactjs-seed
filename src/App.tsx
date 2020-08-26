import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const App = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <div>{Routes}</div>
            </React.StrictMode>
        </BrowserRouter>
    );
};

export default App;
