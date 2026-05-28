interface ProgressTracker {
  loaded: () => Promise<number>;
  percent: number;
  clear: () => void;
}

export const setProgress = (setLoading: (value: number) => void): ProgressTracker => {
  let percent: number = 0;
  let isLoading = true;
  let phase3IntervalId: NodeJS.Timeout | null = null;

  // Phase 1: Quick initial progress (0-40%) over 1 second
  const phase1Duration = 1000;
  const phase1Start = Date.now();
  
  const phase1Interval = setInterval(() => {
    const elapsed = Date.now() - phase1Start;
    const progress = Math.min((elapsed / phase1Duration) * 40, 40);
    percent = progress;
    setLoading(Math.round(percent));

    if (elapsed >= phase1Duration) {
      clearInterval(phase1Interval);
      startPhase2();
    }
  }, 50);

  function startPhase2() {
    // Phase 2: Medium progress (40-80%) over 3 seconds
    const phase2Duration = 3000;
    const phase2Start = Date.now();

    const phase2Interval = setInterval(() => {
      if (!isLoading) {
        clearInterval(phase2Interval);
        return;
      }

      const elapsed = Date.now() - phase2Start;
      const progress = Math.min((elapsed / phase2Duration) * 40, 40);
      percent = 40 + progress;
      setLoading(Math.round(percent));

      if (elapsed >= phase2Duration) {
        clearInterval(phase2Interval);
        startPhase3();
      }
    }, 100);
  }

  function startPhase3() {
    // Phase 3: Slow progress (80-99%) until loaded() is called
    phase3IntervalId = setInterval(() => {
      if (!isLoading) {
        if (phase3IntervalId) {
          clearInterval(phase3IntervalId);
        }
        return;
      }

      if (percent < 99) {
        percent += Math.random() * 2;
        percent = Math.min(percent, 99);
        setLoading(Math.round(percent));
      }
    }, 500);
  }

  function clear() {
    isLoading = false;
    if (phase3IntervalId) {
      clearInterval(phase3IntervalId);
    }
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      isLoading = false;
      if (phase3IntervalId) {
        clearInterval(phase3IntervalId);
      }
      
      // Quickly increment from current percent to 100
      const finalInterval = setInterval(() => {
        if (percent < 100) {
          percent = Math.min(percent + 5, 100);
          setLoading(Math.round(percent));
        } else {
          clearInterval(finalInterval);
          resolve(100);
        }
      }, 20);
    });
  }

  return { loaded, percent, clear };
};
