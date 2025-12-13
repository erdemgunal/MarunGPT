'use client';

import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        
        // Listen for changes
        const listener = (e) => setMatches(e.matches);
        
        // Set initial value
        listener(media);
        
        media.addEventListener('change', listener);
        
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
}