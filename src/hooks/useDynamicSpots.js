import { useState, useEffect, useRef, useCallback } from 'react';

const blueShades = [
    'rgba(0, 123, 255, 0.6)',
    'rgba(170, 0, 111, 0.6)',
    'rgba(0, 103, 227, 0.5)',
    'rgba(29, 63, 211, 0.5)',
    'rgba(200, 50, 255, 0.4)',
];

const getRandomColor = () => blueShades[Math.floor(Math.random() * blueShades.length)];

export function useDynamicSpots(containerRef, { initialSpotCount = 5, maxSpotDensity = 100000 } = {}) {
    const [spots, setSpots] = useState([]);
    const rAFIdRef = useRef(null);
    const lastSpotCreationTimeRef = useRef(0);
    const spotIdCounter = useRef(0);

    const createSpot = useCallback(() => {
        const container = containerRef.current;
        if (!container) return null;

        const rect = container.getBoundingClientRect();
        const spotRadius = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hero-bg-radius') || '80');

        let from = { x: 0, y: 0 };
        let to = { x: 0, y: 0 };
        let distance = 0;
        const minDistance = Math.min(rect.width, rect.height) * 0.4;

        let attempts = 0;
        while (distance < minDistance && attempts < 50) {
            from = { x: Math.random() * rect.width, y: Math.random() * rect.height };
            to = { x: Math.random() * rect.width, y: Math.random() * rect.height };
            distance = Math.hypot(from.x - to.x, from.y - to.y);
            attempts++;
        }

        const duration = Math.floor(distance * 30);
        const color = getRandomColor();
        const id = spotIdCounter.current++;

        return {
            id,
            style: {
                '--color': color,
                '--from-x': `${from.x}px`,
                '--from-y': `${from.y}px`,
                '--to-x': `${to.x}px`,
                '--to-y': `${to.y}px`,
                '--duration': `${duration}ms`,
                '--radius-spot': `${spotRadius}px`,
            },
        };
    }, [containerRef]);

    const removeSpot = useCallback((id) => {
        setSpots((prevSpots) => prevSpots.filter((spot) => spot.id !== id));
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const getSpotsCount = () => {
            const rect = container.getBoundingClientRect();
            return Math.max(initialSpotCount, Math.floor((rect.width * rect.height) / maxSpotDensity));
        };

        setSpots(Array.from({ length: getSpotsCount() }, createSpot).filter(Boolean));

        const animationLoop = (currentTime) => {
            const maxSpots = getSpotsCount();
            if (lastSpotCreationTimeRef.current === 0) lastSpotCreationTimeRef.current = currentTime;
            const elapsedTime = currentTime - lastSpotCreationTimeRef.current;

            if (elapsedTime > 1500) {
                if (spots.length < maxSpots) {
                    const newSpot = createSpot();
                    if (newSpot) {
                        setSpots(prev => [...prev, newSpot]);
                    }
                }
                lastSpotCreationTimeRef.current = currentTime;
            }
            rAFIdRef.current = requestAnimationFrame(animationLoop);
        };

        rAFIdRef.current = requestAnimationFrame(animationLoop);

        return () => {
            if (rAFIdRef.current) cancelAnimationFrame(rAFIdRef.current);
            setSpots([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerRef, createSpot, initialSpotCount, maxSpotDensity]);

    return { spots, removeSpot };
}