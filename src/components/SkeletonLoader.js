import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const SkeletonLoader = () => {
  const animation = useSpring({
    from: { opacity: 0.5 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    loop: { reverse: true },
  });

  return (
    <animated.div
      style={animation}
      className="w-full h-48 bg-gray-300 rounded-lg"
    ></animated.div>
  );
};

export default SkeletonLoader;
