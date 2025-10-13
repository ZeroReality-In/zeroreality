import React, { useEffect, useRef, useState } from "react";

const StarIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1L14.594 8.406L22 11L14.594 13.594L12 21L9.406 13.594L2 11L9.406 8.406L12 1Z"
        fill="black"
      />
    </svg>
  );
};

interface ScrollingBannerProps {
  speed?: number; // Pixels per second
}

const TextMarquee: React.FC<ScrollingBannerProps> = ({ speed = 60 }) => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Set up the animation
    let animationId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Move by distance based on elapsed time and speed
      setTranslateX((prev) => {
        const newValue = prev - (speed * elapsed) / 1000;
        // Reset when we've moved exactly one full width to create seamless loop
        const itemWidth = container.getBoundingClientRect().width / 4;
        return newValue <= -itemWidth ? 0 : newValue;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [speed]);

  // Fixed text content with corrected spelling
  const marqueeText = ["INNOVATE", "CREATE", "DELIVER"];

  // Create the content for one iteration
  const renderContent = () => (
    <>
      {marqueeText.map((text, index) => (
        <React.Fragment key={index}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(32px, 6vw, 72px)",
                letterSpacing: "-0.02em",
                lineHeight: "clamp(40px, 7vw, 80px)",
                color: "rgb(0, 0, 0)",
                margin: 0,
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </p>
          </div>

          {/* Add star icon after each text except the last one (DELIVER) */}
          {index < marqueeText.length - 1 && (
            <div style={{ margin: "0 1rem" }}>
              <StarIcon />
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );

  return (
    <section
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        placeItems: "center",
        margin: 0,
        padding: 0,
        listStyleType: "none",
        opacity: 1,
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <ul
        ref={scrollRef}
        style={{
          display: "flex",
          width: "fit-content",
          height: "100%",
          maxHeight: "100%",
          placeItems: "center",
          margin: 0,
          padding: 0,
          listStyleType: "none",
          textIndent: "none",
          gap: 0,
          position: "relative",
          flexDirection: "row",
          willChange: "transform",
          transform: `translateX(${translateX}px)`,
        }}
      >
        {/* Create four identical sets of items for truly seamless looping */}
        {[0, 1, 2, 3].map((setIndex) => (
          <li
            key={setIndex}
            style={{ 
              flexShrink: 0, 
              willChange: "transform", 
              display: "flex",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <div style={{ margin: "0 2rem" }}>
              <StarIcon />
            </div>
            {renderContent()}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TextMarquee;