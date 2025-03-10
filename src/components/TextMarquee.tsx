import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';

const StarIcon = () => {
  const { theme } = useTheme();
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L14.594 8.406L22 11L14.594 13.594L12 21L9.406 13.594L2 11L9.406 8.406L12 1Z" fill={theme === 'dark' ? 'white' : 'black'} />
    </svg>
  );
};

interface ScrollingBannerProps {
  speed?: number; // Pixels per second
}

const TextMarquee: React.FC<ScrollingBannerProps> = ({ speed = 50 }) => {
  const { theme } = useTheme();
  const scrollRef = useRef<HTMLUListElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Get the width of the container and first item
    const containerRect = container.getBoundingClientRect();
    const itemRect = container.firstElementChild?.getBoundingClientRect();
    
    if (!itemRect) return;
    
    setContainerWidth(containerRect.width);
    setItemWidth(itemRect.width);

    // Set up the animation
    let animationId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Move by distance based on elapsed time and speed
      setTranslateX(prev => {
        const newValue = prev - (speed * elapsed) / 1000;
        // Reset when we've moved one third of the total width (one iteration)
        const resetPoint = -(itemRect.width / 3);
        return newValue <= resetPoint ? 0 : newValue;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed]);

  return (
    <section 
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
        placeItems: 'center',
        margin: 0,
        padding: 0,
        listStyleType: 'none',
        opacity: 1,
        overflow: 'hidden',
        backgroundColor: theme === 'dark' ? 'black' : 'white',
      }}
    >
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          width: 'fit-content',
          height: '100%',
          maxHeight: '100%',
          placeItems: 'center',
          margin: 0,
          padding: 0,
          listStyleType: 'none',
          textIndent: 'none',
          gap: 0,
          position: 'relative',
          flexDirection: 'row',
          willChange: 'transform',
          transform: `translateX(${translateX}px)`,
        }}
      >
        {[0, 1, 2].map((index) => (
          <li key={index} style={{ flexShrink: 0, willChange: 'transform', display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '2rem',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0 }}>
                <p
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontSize: '112px',
                    letterSpacing: '-0.02em',
                    lineHeight: '120px',
                    color: theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                    margin: 0,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  IDEATE
                </p>
              </div>
              
              <div style={{ margin: '0 2rem' }}>
                <StarIcon />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0 }}>
                <p
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontSize: '112px',
                    letterSpacing: '-0.02em',
                    lineHeight: '120px',
                    color: theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                    margin: 0,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  DESIGN
                </p>
              </div>
              
              <div style={{ margin: '0 2rem' }}>
                <StarIcon />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0 }}>
                <p
                  style={{
                    fontFamily: '"Clash Display", sans-serif',
                    fontSize: '112px',
                    letterSpacing: '-0.02em',
                    lineHeight: '120px',
                    color: theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                    margin: 0,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  EVOLVE
                </p>
              </div>
              
              <div style={{ margin: '0 2rem' }}>
                <StarIcon />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TextMarquee;