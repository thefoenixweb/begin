//import styles from './home-page.module.scss';
//import styles from './root.module.scss';
import cx from 'classnames';
import ChevronRightSvg from '../../assets/chevron right.svg';
import Homeimage1Jpeg from '../../assets/homeimage1.jpeg';
import styles from '../../../app/root.module.scss';
import styles0 from './home-page.module.scss';
import { Header } from '../header/header';
import { Gallery } from '../gallery/gallery';
import { Footer } from '../footer/footer';

export interface HomePageProps {
    className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={styles.root}>
            <Header />
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Speed up web app development with our robust designs
                    </h1>
                    <h2 className={styles.subtitle}>Extensive design experience</h2>
                    <p className={styles.text}>
                        Create web apps faster with our extensive design packages. We offer adaptive
                        components, font/color variables, dynamic type sizes, and light and dark
                        mode designs.
                    </p>
                    <div className={styles.buttons}>
                        <a
                            href="/"
                            className={styles.secondary}
                        >
                            Free download
                            <img src={ChevronRightSvg} alt="" height="20" width="20" />
                        </a>
                    </div>
                </div>
                <img
                    src={Homeimage1Jpeg}
                    alt=""
                    height="500"
                    width="500px"
                    className={styles.image}
                />
            </div>
            <Gallery />
            <Footer />
        </div>
    );
};
