import { atom } from 'recoil';
import Keys from '../../Keys';

const CountState = atom({
    key: Keys.COUNT_STATE,
    default: {
        value: 1
    }
});

export default CountState;
