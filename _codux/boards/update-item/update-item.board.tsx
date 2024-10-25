import { createBoard } from '@wixc3/react-board';
import { UpdateItem } from '../../../src/components/update-item/update-item';

export default createBoard({
    name: 'UpdateItem',
    Board: () => <UpdateItem />,
});
