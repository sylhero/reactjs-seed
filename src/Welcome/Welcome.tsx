import React from 'react';

import { css } from 'emotion';

const base = css`
    color: hotpink;
`;
const welcomeStyle = css`
    ${base}
    background-color: blue;
`;

const Welcome = (): React.ReactElement => {
    return <div className={welcomeStyle}>welcome</div>;
};

export default Welcome;
