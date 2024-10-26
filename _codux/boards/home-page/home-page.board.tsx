import { createBoard } from '@wixc3/react-board';
import { HomePage } from '../../../src/components/home-page/home-page';
import {MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'HomePage',
    Board: () => (
    <MemoryRouter>
    <HomePage />,
    </MemoryRouter>),
    environmentProps: {
        windowWidth: 1038,
        windowHeight: 584,
    },
});
