import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../src/components/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    environmentProps: {
        windowWidth: 1030,
    },
});
