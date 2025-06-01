// app/(components)/Navbar.jsx
'use client'; // Required for onClick client-side interactions (scrolling)

import Link from 'next/link'; // Good for potential future actual page links, though we use onClick for scrolling here
import styles from './NavBar.module.scss';

export default function NavBar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <a onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
                        PivotHire
                        {/* <img src="/logo.png" /> */}
                    </a>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <a onClick={() => scrollToSection('hero')}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('features')}>Features</a>
                    </li>
                </ul>
                <a href={'mailto:zhongyi070622@gmail.com?subject=Demo Request for PivotHire'}>
                    <button
                        className={styles.navCtaButton}
                    >
                        Request a Demo
                    </button>
                </a>
            </div>
        </nav>
    );
}