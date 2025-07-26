import { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
  const followerRef = useRef(null);
  const mouseX = useRef(-100);
  const mouseY = useRef(-100);
  const posX = useRef(-100);
  const posY = useRef(-100);
  const initialized = useRef(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const speed = 0.1;

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen(); // initial check
    window.addEventListener('resize', checkScreen);

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const follower = followerRef.current;
    if (!follower) return;

    let animationFrameId;

    const move = (e) => {
      if (!initialized.current) {
        posX.current = e.clientX;
        posY.current = e.clientY;
        follower.style.opacity = '1';
        initialized.current = true;
      }

      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const update = () => {
      posX.current += (mouseX.current - posX.current) * speed;
      posY.current += (mouseY.current - posY.current) * speed;

      follower.style.transform = `translate(${posX.current}px, ${posY.current}px) translate(-50%, -200%)`;

      animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', move);
    update();

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDesktop]);

  if (!isDesktop) return null; // don't render at all on mobile

  return (
    <div
      ref={followerRef}
      style={{ willChange: 'transform' }}
      className="pointer-events-none fixed z-[9999] h-4 w-4 rounded-full bg-[#39acff] opacity-0 transition-opacity duration-300"
    />
  );
};

export default CursorFollower;
