/** @jsx jsx */
// <div className={styles.wheel}>
//     <img src={outerWheel} width="100%" />
//     <img src={pointer} className={styles.pointer} />
//     <LuckyWheel
//         ref={wheel}
//         width="275px"
//         height="275px"
//         className={styles.luckDraw}
//         prizes={prizes}
//         buttons={buttons}
//         defaultStyle={defaultStyle}
//         onStart={() => {
//             // 点击抽奖按钮会触发star回调
//             // 调用抽奖组件的play方法开始游戏
//             wheel.current.play();
//             // 模拟调用接口异步抽奖
//             setTimeout(() => {
//                 // 假设拿到后端返回的中奖索引
//                 const index = (Math.random() * 6) >> 0;
//                 // 调用stop停止旋转并传递中奖索引
//                 wheel.current.stop(index);
//             }, 2500);
//         }}
//         onEnd={(prize) => {
//             // 抽奖结束会触发end回调
//             console.log(prize);
//             alert('恭喜获得大奖:' + prize.title);
//         }}
//     ></LuckyWheel>
// </div>
// const data = [
//     { name: '1元', img: prize, color: '#F8DEF8' },
//     { name: '10元', img: prize, color: '#FEF3FC' },
//     { name: '100元', img: prize, color: '#F8DEF8' },
//     { name: '谢谢参与', img: prize, color: '#FEF3FC' },
//     { name: '15元', img: prize, color: '#F8DEF8' },
//     { name: '12元', img: prize, color: '#FEF3FC' },
//     { name: '11元', img: prize, color: '#F8DEF8' },
//     { name: '13元', img: prize, color: '#FEF3FC' }
// ];
// data.forEach((item, index) => {
//     tempPrizes.push({
//         name: item.name,
//         background: item.color,
//         fonts: [{ text: item.name, top: '12%' }],
//         imgs: [{ src: item.img, width: '35%', top: '45%' }]
//     });
// });
import React, { useState, useEffect, useRef } from 'react';
import { LuckyWheel } from 'react-luck-draw';
import outerWheel from '../assets/img/outer-wheel.png';
import pointer from '../assets/img/pointer2.png';
import prize from '../assets/img/prize.png';
import go from '../assets/img/go.png';
import { jsx, css } from '@emotion/react';
import styles from './Wheel.scss';

const Wheel = (): React.ReactElement => {
    const [prizes, setPrizes] = useState([]);
    const [states, setStates] = useState({ blocks: null, buttons: null, defaultStyle: null, prizes: null });
    const wheel = useRef(null);
    const defaultStyle = {
        fontColor: '#000',
        fontSize: '13px'
    };
    const defaultConfig = {
        offsetDegree: 22.5
    };
    const buttons = [
        {
            radius: '40px',
            imgs: [{ src: go, width: '140%', top: '-135%' }]
        }
    ];
    const blocks = [{ imgs: [{ src: outerWheel, width: '100%', rotate: true }] }];
    const loadSettings = () => {
        //TODO: fetch settings from BE
        const tempPrizes = [];

        const data = [
            { name: '10个京豆', img: prize, color: '#F8DEF8' },
            { name: '5个京豆', img: prize, color: '#FEF3FC' },
            { name: '1个京豆', img: prize, color: '#F8DEF8' },
            { name: '谢谢参与', img: prize, color: '#FEF3FC' },
            { name: '10个京豆', img: prize, color: '#F8DEF8' },
            { name: '5个京豆', img: prize, color: '#FEF3FC' },
            { name: '1个京豆', img: prize, color: '#F8DEF8' },
            { name: '谢谢参与', img: prize, color: '#FEF3FC' }
        ];
        data.forEach((item, index) => {
            tempPrizes.push({
                name: item.name,
                background: item.color,
                fonts: [{ text: item.name, top: '12%' }],
                imgs: [{ src: item.img, width: '45%', top: '35%' }]
            });
        });
        setPrizes(tempPrizes);
    };
    useEffect(() => {
        // make call to get list of items
        //loadSettings();
        const tempPrizes = [];
        const data = [
            { name: '1元', img: prize, color: '#F8DEF8' },
            { name: '10元', img: prize, color: '#FEF3FC' },
            { name: '100元', img: prize, color: '#F8DEF8' },
            { name: '谢谢参与', img: prize, color: '#FEF3FC' },
            { name: '15元', img: prize, color: '#F8DEF8' },
            { name: '12元', img: prize, color: '#FEF3FC' },
            { name: '11元', img: prize, color: '#F8DEF8' },
            { name: '13元', img: prize, color: '#FEF3FC' }
        ];
        data.forEach((item, index) => {
            tempPrizes.push({
                title: item.name,
                background: item.color,
                fonts: [{ text: item.name, top: '12%' }],
                imgs: [{ src: item.img, width: '35%', top: '45%' }]
            });
        });
        // [
        //     { title: '1元', background: '#f9e3bb', fonts: [{ text: '1元红包', top: '18%' }] },
        //     { title: '100元', background: '#f8d384', fonts: [{ text: '100元红包', top: '18%' }] },
        //     { title: '0.5元', background: '#f9e3bb', fonts: [{ text: '0.5元红包', top: '18%' }] },
        //     { title: '2元', background: '#f8d384', fonts: [{ text: '2元红包', top: '18%' }] },
        //     { title: '10元', background: '#f9e3bb', fonts: [{ text: '10元红包', top: '18%' }] },
        //     { title: '50元', background: '#f8d384', fonts: [{ text: '50元红包', top: '18%' }] }
        // ]
        setStates({
            blocks: [{ padding: '10px', background: '#d64737' }],
            prizes: tempPrizes,
            buttons: [
                { radius: '30px', background: '#d64737' },
                { radius: '25px', background: '#fff' },
                { radius: '21px', background: '#f6c66f', pointer: true },
                {
                    radius: '25px',
                    background: '#ffdea0',
                    fonts: [{ text: '开始\n抽奖', fontSize: '14px', top: -18 }]
                }
            ],
            defaultStyle: {
                fontColor: '#d64737',
                fontSize: '10px'
            }
        });
    }, []);
    return (
        <div className={styles.wheel}>
            <LuckyWheel
                ref={wheel}
                width="200px"
                height="200px"
                blocks={states.blocks}
                prizes={states.prizes}
                buttons={states.buttons}
                defaultStyle={states.defaultStyle}
                onStart={() => {
                    // 点击抽奖按钮会触发star回调
                    // 调用抽奖组件的play方法开始游戏
                    wheel.current.play();
                    // 模拟调用接口异步抽奖
                    setTimeout(() => {
                        // 假设拿到后端返回的中奖索引
                        const index = 2; //(Math.random() * 6) >> 0;
                        // 调用stop停止旋转并传递中奖索引
                        wheel.current.stop(index);
                    }, 2500);
                }}
                onEnd={(prize) => {
                    // 抽奖结束会触发end回调
                    console.log(prize);
                    alert('恭喜获得大奖:' + prize.title);
                }}
            ></LuckyWheel>
        </div>
    );
};

export default Wheel;
