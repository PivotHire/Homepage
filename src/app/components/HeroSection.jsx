'use client';

import styles from './HeroSection.module.scss';
import { useRef, useCallback, useEffect } from 'react';

const blueShades = [
    'rgba(0, 123, 255, 0.6)',
    'rgba(170,0,111,0.6)',
    'rgba(0,103,227,0.5)',
    'rgba(29,63,211,0.5)',
    'rgba(200, 50, 255, 0.4)'
];

const getRandomBlueColor = () => {
    return blueShades[Math.floor(Math.random() * blueShades.length)];
};

export default function HeroSection() {

    const dynamicBgRef = useRef(null);
    const heroSectionRef = useRef(null);
    const spotCreationIntervalRef = useRef(null);
    const createdSpotsRef = useRef(new Set());
    const rAFIdRef = useRef(null);
    const lastSpotCreationTimeRef = useRef(0);

    const spotCreationIntervalMs = 1500;

    const createSpot = useCallback(() => {
        const container = dynamicBgRef.current;
        const heroElement = heroSectionRef.current;

        if (!container || !heroElement) return;

        const heroRect = heroElement.getBoundingClientRect();
        const spotRadius = parseFloat(getComputedStyle(container).getPropertyValue('--hero-bg-radius').replace('px', '')) || 80;

        let from = { x: 0, y: 0 };
        let to = { x: 0, y: 0 };
        let distance = 0;
        const minDistance = Math.min(heroRect.width, heroRect.height) * 0.4;

        while (distance < minDistance) {
            from = {
                x: Math.floor(Math.random() * (heroRect.width + 1)),
                y: Math.floor(Math.random() * (heroRect.height + 1)),
            };
            to = {
                x: Math.floor(Math.random() * (heroRect.width + 1)),
                y: Math.floor(Math.random() * (heroRect.height + 1)),
            };
            distance = Math.sqrt(
                Math.pow(from.x - to.x, 2) + Math.pow(from.y - to.y, 2)
            );
        }

        const duration = Math.floor(distance * 30);
        const color = getRandomBlueColor();

        const spotEl = document.createElement('div');
        spotEl.className = styles.spot;
        spotEl.style.setProperty('--color', color);
        spotEl.style.setProperty('--from-x', from.x + 'px');
        spotEl.style.setProperty('--from-y', from.y + 'px');
        spotEl.style.setProperty('--to-x', to.x + 'px');
        spotEl.style.setProperty('--to-y', to.y + 'px');
        spotEl.style.setProperty('--duration', duration + 'ms');
        spotEl.style.setProperty('--radius-spot', spotRadius + 'px');

        container.appendChild(spotEl);
        createdSpotsRef.current.add(spotEl);

        spotEl.addEventListener('animationend', (ev) => {
            if (spotEl.parentElement) {
                spotEl.parentElement.removeChild(spotEl);
                createdSpotsRef.current.delete(spotEl);
            }
        }, { once: true });
    }, []);

    useEffect(() => {
        const heroElement = heroSectionRef.current;
        if (!heroElement || !dynamicBgRef.current) return;

        const getSpotsCount = () => {
            const heroRect = heroElement.getBoundingClientRect();
            return Math.max(5, Math.floor((heroRect.width * heroRect.height) / 200000));
        };

        const animationLoop = (currentTime) => {
            if (lastSpotCreationTimeRef.current === 0) {
                lastSpotCreationTimeRef.current = currentTime;
            }

            const elapsedTime = currentTime - lastSpotCreationTimeRef.current;

            if (elapsedTime > spotCreationIntervalMs) {
                const maxSpots = getSpotsCount();
                if (createdSpotsRef.current.size < maxSpots) {
                    createSpot();
                }
                lastSpotCreationTimeRef.current = currentTime - (elapsedTime % spotCreationIntervalMs);
            }

            rAFIdRef.current = requestAnimationFrame(animationLoop);
        };

        createdSpotsRef.current.forEach(spotEl => {
            if (spotEl.parentElement) spotEl.parentElement.removeChild(spotEl);
        });
        createdSpotsRef.current.clear();
        lastSpotCreationTimeRef.current = 0;

        const initialSpots = getSpotsCount();
        for (let i = 0; i < initialSpots; i++) {
            createSpot();
        }

        rAFIdRef.current = requestAnimationFrame(animationLoop);

        return () => {
            if (rAFIdRef.current) {
                cancelAnimationFrame(rAFIdRef.current);
            }
            createdSpotsRef.current.forEach(spotEl => {
                if (spotEl.parentElement) {
                    spotEl.parentElement.removeChild(spotEl);
                }
            });
            createdSpotsRef.current.clear();
        };
    }, [createSpot]);

    return (
        <section id="hero" className={styles.heroContainer} ref={heroSectionRef}>
            <div ref={dynamicBgRef} className={styles.dynamicBgContainer}>
                {/* spots */}
            </div>
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