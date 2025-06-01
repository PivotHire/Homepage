// app/(components)/Footer.jsx
import styles from './Footer.module.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.copyrightText}>
                    &copy; {currentYear} PivotHire. All rights reserved.
                </p>
                <div className={styles.footerLinks}>
          <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
          <span className={styles.linkSeparator}>|</span>
          <a href="/terms-of-service" className={styles.link}>Terms of Service</a>
        </div>
            </div>
        </footer>
    );
}