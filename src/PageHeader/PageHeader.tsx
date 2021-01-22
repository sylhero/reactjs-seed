import React from 'react';
import { useRecoilValue } from 'recoil';
import CountState from '../globalState/atoms/CountState';

const PageHeader = (): React.ReactElement => {
    const getCount = useRecoilValue(CountState);
    return <div>this is header {getCount.value}</div>;
};

export default PageHeader;
