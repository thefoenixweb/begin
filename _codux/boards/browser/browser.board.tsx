import { createBoard } from '@wixc3/react-board';
import { Browser } from '../../../src/components/browser/browser';

export default createBoard({
    name: 'Browser',
    Board: () => <Browser />,
});
