import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../src/components/header/header';
import {MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    environmentProps: {
        windowWidth: 1084,
    },
});
