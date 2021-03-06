/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useState, useLayoutEffect } from 'react';

export default function useSchedule({ duration = 1250, delayMS = 750, loop = true } = {}) {
  const [elapsed, setTime] = useState(0);

  useLayoutEffect(
    () => {
      let raf;
      let start;
      let loopTimeout;

      const tick = () => {
        // eslint-disable-next-line no-use-before-define
        raf = requestAnimationFrame(performAnimationFrame);
      };

      const performAnimationFrame = () => {
        setTime(Date.now() - start);
        tick();
      };

      const onStart = () => {
        loopTimeout = setTimeout(() => {
          cancelAnimationFrame(raf);
          setTime(Date.now() - start);
          if (loop) onStart();
        }, duration);

        // Start the loop
        start = Date.now();
        tick();
      };

      const renderingDelayTimeout = setTimeout(onStart, delayMS);

      return () => {
        clearTimeout(renderingDelayTimeout);
        clearTimeout(loopTimeout);
        cancelAnimationFrame(raf);
      };
    },
    [duration, delayMS, loop]
  );

  return Math.min(1, elapsed / duration);
}
