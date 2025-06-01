// app/(components)/HeroSection.jsx
'use client'; // Needed if the button has client-side interaction beyond a simple link

import styles from './HeroSection.module.scss';

export default function HeroSection() {

    return (
        <section id="hero" className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>PivotHire</h1>
                <p className={styles.tagline}>
                    The revolutionary solution that will change the world's freelancer labor market forever.
                </p>
                <a href={'mailto:zhongyi070622@gmail.com?subject=Demo Request for PivotHire'}>
                    <button
                        className={styles.ctaButton}
                    >
                        Request a Demo
                    </button>
                </a>
            </div>
        </section>
    );
}