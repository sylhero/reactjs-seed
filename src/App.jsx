import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Routes from './Routes';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                {Routes}
            </div>
        </BrowserRouter>);
};

export default App;
