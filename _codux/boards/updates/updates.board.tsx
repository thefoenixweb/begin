import { createBoard } from '@wixc3/react-board';
import { Updates } from '../../../src/components/updates/updates';

export default createBoard({
    name: 'Updates',
    Board: () => <Updates />,
    environmentProps: {
        windowWidth: 1034,
    },
});
