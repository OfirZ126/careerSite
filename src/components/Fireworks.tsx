import React, { useEffect, useState } from 'react';

export default function Fireworks() {
  const [fireworks, setFireworks] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks(prev => [...prev, Date.now()]);
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {fireworks.map(id => (
        <div
          key={id}
          className="firework"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}