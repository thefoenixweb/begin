import styles from './footer.module.scss';
import cx from 'classnames';
import XLogoSvg from '../../assets/x  logo.svg';
import YoutubeLogoSvg from '../../assets/youtube  logo.svg';
import LineSvg from '../../assets/line.svg';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={styles.footer}>
            <img className={styles.lineIcon} alt="" src={LineSvg} />
            <div className={styles.col}>
                <div className={styles.company}>
                    <div className={styles.designIosApplications}>
                        Create web apps faster with our extensive design packages.
                    </div>
                    <div className={styles.social}>
                        <a className={styles.buttonCircle}>
                            <img className={styles.xLogo} alt="" src={XLogoSvg} />
                        </a>
                        <a className={styles.buttonCircle}>
                            <img className={styles.xLogo} alt="" src={YoutubeLogoSvg} />
                        </a>
                    </div>
                    <div className={styles.privacyTerms}>© 2024 . PRIVACY . TERMS</div>
                </div>
                <div className={styles.newsletter}>
                    <div className={styles.subscribeToThe}>
                        Subscribe to the By Design Newsletter
                    </div>
                    <div className={styles.recentUpdatesThoughts}>
                        Recent updates, thoughts, news, and announcements straight to your email.
                    </div>
                    <input className={styles.button} placeholder="Email address" />
                    <div className={styles.button1}>
                        <div className={styles.subscribe}>Subscribe</div>
                    </div>
                </div>
            </div>
            <div className={styles.col1}>
                <div className={styles.menu}>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Designs</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Pricing</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Updates</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Sign in</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Create account</div>
                        <div className={styles.glow} />
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>UI Kit Web</div>
                        <div className={styles.glow} />
                    </div>
                    <div className={styles.buttonMenu}>
                        <div className={styles.account}>Wallpapers</div>
                        <div className={styles.glow} />
                    </div>
                </div>
            </div>
        </div>
    );
};
