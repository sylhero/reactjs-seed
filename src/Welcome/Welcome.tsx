/** @jsx jsx */
import React from 'react';

import { jsx, css } from '@emotion/react';

const base = css`
    color: hotpink;
`;
const welcomeStyle = css`
    ${base}
    background-color: blue;
`;

const Welcome = (): React.ReactElement => {
    return <div css={welcomeStyle}>welcome</div>;
};

export default Welcome;
