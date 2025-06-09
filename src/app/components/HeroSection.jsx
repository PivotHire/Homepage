'use client';

import styles from './HeroSection.module.scss';
import { useRef } from 'react';
import { useRollingText } from '@/hooks/useRollingText';

const rollingWords = [
    'Evolved.',
    'Reimagined.',
    'Smarter.',
    'Simplified.',
    'Trusted.',
];

export default function HeroSection() {
    const heroSectionRef = useRef(null);
    const { word, key, isExiting } = useRollingText(rollingWords, {
        duration: 2000,
        animationTime: 500
    });

    return (
        <section id="hero" className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>
                    <span className={styles.staticWord}>Freelancing,</span><br/>
                    <span className={styles.rollingWrapper}>
                        <span key={key} className={isExiting ? styles.exit : styles.enter}>
                            {word}
                        </span>
                    </span>
                </h1>
                <p className={styles.tagline}>
                    PivotHire AI is building a high-trust network where quality-driven companies and skilled freelance
                    professionals collaborate with confidence.
                </p>
                <a href={'https://demo.pivothire.tech/'}>
                    <button className={styles.ctaButton}>
                        Get Started
                    </button>
                </a>
            </div>
        </section>
    );
}