'use client';

import styles from './HeroSection.module.scss';

export default function HeroSection() {

    return (
        <section id="hero" className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>PivotHire AI</h1>
                <p className={styles.tagline}>
                    The AI-driven freelancing platform for hiring match.
                </p>
                <a href={'mailto:core@pivothire.tech?subject=Demo Request for PivotHire'}>
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