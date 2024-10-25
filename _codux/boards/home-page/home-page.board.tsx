import { createBoard } from '@wixc3/react-board';
import { HomePage } from '../../../src/components/home-page/home-page';

export default createBoard({
    name: 'HomePage',
    Board: () => <HomePage />,
    environmentProps: {
        windowWidth: 1038,
        windowHeight: 584,
    },
});
