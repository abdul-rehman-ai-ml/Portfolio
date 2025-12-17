import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Spotlight cursor that follows the mouse with a soft glow and grid reveal.
const SpotlightCursor = () => {
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Springs give the cursor a smooth, physics-based feel.
  const x = useSpring(rawX, { stiffness: 140, damping: 18, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 140, damping: 18, mass: 0.4 });

  useEffect(() => {
    const handleMove = (event) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [rawX, rawY]);

  return (
    <>
      {/* Glow spotlight (centered on cursor) */}
      <motion.div
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 480,
          height: 480,
          pointerEvents: 'none',
          zIndex: 60,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          background:
            'radial-gradient(240px at 50% 50%, rgba(255,255,255,0.18), rgba(99,102,241,0.12), transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Grid reveal that aligns with the spotlight */}
      <motion.div
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 520,
          height: 520,
          pointerEvents: 'none',
          zIndex: 59,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          mixBlendMode: 'screen',
          opacity: 0.5,
        }}
      />
    </>
  );
};

export default SpotlightCursor;

