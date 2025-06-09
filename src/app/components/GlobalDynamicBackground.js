'use client';

import { useRef } from 'react';
import { useDynamicSpots } from '@/hooks/useDynamicSpots';
import styles from './GlobalDynamicBackground.module.scss';

export default function GlobalDynamicBackground() {
    const backgroundRef = useRef(null);
    const { spots, removeSpot } = useDynamicSpots(backgroundRef);

    return (
        <div ref={backgroundRef} className={styles.backgroundContainer}>
            {spots.map(spot => (
                <div
                    key={spot.id}
                    className={styles.spot}
                    style={spot.style}
                    onAnimationEnd={() => removeSpot(spot.id)}
                />
            ))}
        </div>
    );
}