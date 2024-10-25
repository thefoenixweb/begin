import styles from './header.module.scss';
import cx from 'classnames';
import Q5U3ZLogomakrPng from '../../assets/4q5u3z-logomakr.png';

export interface HeaderProps {
    className?: string;
    selectedButton?: 'Designs' | 'Updates' | 'Buy Now';
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.bydesignLogo} alt="" src={Q5U3ZLogomakrPng} />
                <b className={styles.bydesigncode}>By Design</b>
            </div>
            <div className={styles.header1}>
                <div className={styles.button}>
                    <div className={styles.designs}>Designs</div>
                    <div className={styles.info}>
                        <div className={styles.total}>Total</div>
                        <div className={styles.div}>252</div>
                    </div>
                </div>
                <div className={styles.button1}>
                    <div className={styles.designs}> Updates</div>
                    <div className={styles.info}>
                        <div className={styles.total}>2024</div>
                        <div className={styles.div}>August</div>
                    </div>
                </div>
                <div className={styles.button1}>
                    <div className={styles.designs}>Buy Now</div>
                    <div className={styles.info}>
                        <div className={styles.total}>Early</div>
                        <div className={styles.div}>Access</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
