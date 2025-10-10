export const LightSpeedBackground = () => {
  const streaks = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    width: Math.random() * 200 + 100,
    height: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * -5,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {streaks.map((streak) => (
        <div
          key={streak.id}
          className="absolute rounded-full animate-light-speed"
          style={{
            left: `${streak.x}%`,
            top: `${streak.y}%`,
            width: `${streak.width}px`,
            height: `${streak.height}px`,
            background: 'linear-gradient(90deg, transparent, hsl(var(--foreground)), transparent)',
            opacity: streak.opacity,
            animation: `light-speed ${streak.duration}s linear ${streak.delay}s infinite`,
            transform: 'rotate(-15deg)',
          }}
        />
      ))}
    </div>
  );
};
