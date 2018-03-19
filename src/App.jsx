import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import News from './News';
import Main from './Main';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <News />
                <Main />
            </div>
        </BrowserRouter>);
};

export default App;
