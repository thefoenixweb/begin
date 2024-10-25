import styles from './updates.module.scss';
import classNames from 'classnames';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export interface UpdatesProps {
    className?: string;
}

import update1Image from '../../assets/homeimagedark10.jpeg';
import update2Image from '../../assets/homeimagedark11.jpeg';
import { UpdateItem } from '../update-item/update-item';
const updates = [
    {
        date: 'September 22, 2024',
        title: 'Change everything with one click: colors, sizes, backgrounds, breakpoints.',
        description: `Improve your designing process through our UI Kit's easy-to-use elements like buttons, segmented controls, toggle, and search, cards, each designed for a smooth user experience.`,
        image: update1Image,
    },
    {
        date: 'September 23, 2024',
        title: 'Modify everything in a single click: hues, dimensions, backdrops, breakpoints',
        description: `Boost your design method by utilizing our UI Kit's simple elements including buttons, segmented controls, toggle, search, and cards, each built for a seamless user experience.`,
        image: update2Image,
    },
];

export const Updates = ({ className }: UpdatesProps) => {
    return <div className={classNames(styles.root, className)}>
           
            <Header selectedButton="Updates" />
            {updates.map((update, index) => (
                <UpdateItem
                    key={index}
                    date={update.date}
                    title={update.title}
                    description={update.description}
                    imageSrc={update.image}
                />
            ))}
            <Footer />
        </div>
};
