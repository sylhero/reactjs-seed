import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './partials/base.scss';

const App = () => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <div>
                    {Routes}
                </div>
            </React.StrictMode>
        </BrowserRouter>
    );
};

export default App;
