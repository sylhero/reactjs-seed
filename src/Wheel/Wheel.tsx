/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react';
import './Wheel.scss';

const getPrizeCss = (degree: number, backgroundColor: string) => {
    return css({
        WebkitTransform: `rotate(${degree}deg)`,
        MozTransform: `rotate(${degree}deg)`,
        transform: `rotate(${degree}deg)`,
        borderColor: `${backgroundColor} transparent !important`
    });
};

const prizeSample: any = [
    {
        name: 'cup',
        degree: 10,
        image: 'cup.png',
        backgroundColor: 'pink'
    },
    {
        name: 'cup2',
        degree: 30,
        image: 'cup.png',
        backgroundColor: 'red'
    },
    {
        name: 'cup3',
        degree: 320,
        image: 'cup.png',
        backgroundColor: 'blue'
    }
];
const renderPrizes = (prizes: any) => {
    return prizes.map((prize: any) => {
        return (
            <div key={prize.name} css={getPrizeCss(prize.degree, prize.backgroundColor)} className="sec">
                <span className="fa">{prize.name}</span>
            </div>
        );
    });
};
const Wheel = (): React.ReactElement => {
    const [prizes, setPrizes] = useState([]);
    useEffect(() => {
        // make call to get list of items
        setPrizes(prizeSample);
    }, []);
    return (
        <div id="wrapper">
            <div id="wheel">
                <div id="inner-wheel">{renderPrizes(prizes)}</div>
                <div id="spin">
                    <div id="inner-spin"></div>
                </div>
                <div id="shine"></div>
            </div>
            <div id="txt"></div>
        </div>
    );
};

export default Wheel;
