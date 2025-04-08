import { useState, useCallback, useEffect } from 'react';

export const useMediaQuery = (width: number): boolean => {
  const [targetReached, setTargetReached] = useState<boolean>(false);

  // Only run in client-side environment
  const isClient = typeof window === 'object';

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    // Skip on server-side rendering
    if (!isClient) return;

    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient, width]);

  return targetReached;
};

export default { useMediaQuery };