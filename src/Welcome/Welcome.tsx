/** @jsx jsx */
import React from 'react';
import { Button } from 'antd';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { jsx, css } from '@emotion/react';
import CountState from '../globalState/atoms/CountState';

const base = css`
    color: hotpink;
`;
const welcomeStyle = css`
    ${base}
    background-color: blue;
`;

const Welcome = (): React.ReactElement => {
    const setCount = useSetRecoilState(CountState);
    const getCount = useRecoilValue(CountState);
    const onClick = () => {
        setCount({ value: getCount.value + 1 });
    };
    return (
        <div>
            <span css={welcomeStyle}>welcome</span>
            <Button onClick={onClick}>clickme</Button>
        </div>
    );
};

export default Welcome;
