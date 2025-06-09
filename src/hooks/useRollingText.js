import { useState, useEffect } from 'react';

export function useRollingText(words, { duration = 2500, animationTime = 500 } = {}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (!words || words.length === 0) return;

        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, duration);

        const enterTimer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
            setIsExiting(false);
        }, duration + animationTime);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(enterTimer);
        };
    }, [currentIndex, words, duration, animationTime]);

    return {
        word: words[currentIndex],
        key: currentIndex,
        isExiting,
    };
}