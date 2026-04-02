import { useEffect, useRef } from "react";
import "./backgroundBlobs.css";

const BackgroundBlobs = () => {
  const blobsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const blobs = blobsRef.current;
    const placedPositions: { x: number; y: number }[] = [];
    let currentScroll = 0;
    let targetScroll = 0;
    const getSafePosition = () => {
      let x = 0;
      let y = 0;
      let safe = false;
      while (!safe) {
        x = Math.random() * 80;
        y = Math.random() * 80;
        safe = placedPositions.every((pos) => {
          const dx = pos.x - x;
          const dy = pos.y - y;
          return Math.sqrt(dx * dx + dy * dy) > 25;
        });
      }
      placedPositions.push({ x, y });
      return { x, y };
    };

    blobs.forEach((blob) => {
      const { x, y } = getSafePosition();
      blob.style.left = `${x}%`;
      blob.style.top = `${y}%`;
    });
    const handleScroll = () => {
      targetScroll = window.scrollY;
    };
    const animate = () => {
      currentScroll += (targetScroll - currentScroll) * 0.08;
      blobs.forEach((blob, i) => {
        const strength = 80;
        const speed = 0.005;
        const moveX = Math.sin(currentScroll * speed + i) * strength;
        const moveY = Math.cos(currentScroll * speed + i) * (strength * 0.6);
        blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
      requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-blobs">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) blobsRef.current[i] = el;
          }}
          className="blob"
        />
      ))}
    </div>
  );
};

export default BackgroundBlobs;
