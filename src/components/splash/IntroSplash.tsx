import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './IntroSplash.css';

gsap.registerPlugin(useGSAP);

interface IntroSplashProps {
  onComplete?: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const badge1Ref = useRef<HTMLDivElement>(null);
  const badge2Ref = useRef<HTMLDivElement>(null);
  const [isFinished, setIsFinished] = useState(false);

  useGSAP(() => {
    // Respect user reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsFinished(true);
      if (onComplete) onComplete();
      return;
    }

    // Freeze body scroll while splash is active
    document.body.style.overflow = 'hidden';

    const chars1 = badge1Ref.current?.querySelectorAll('.splash-char');
    const chars2 = badge2Ref.current?.querySelectorAll('.splash-char');

    // Initial state setup
    gsap.set(badge1Ref.current, { scale: 0.82, opacity: 0, y: 14 });
    gsap.set(chars1 || [], { opacity: 0, y: 12 });
    gsap.set(badge2Ref.current, { opacity: 0, scale: 0.94, display: 'none' });
    gsap.set(chars2 || [], { opacity: 0, y: 12 });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        setIsFinished(true);
        if (onComplete) onComplete();
      }
    });

    // 1. Badge 1 ("Oh, hello!") pops in with tactile spring
    tl.to(badge1Ref.current, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.28,
      ease: 'back.out(1.8)'
    });

    // 2. Letters wave in with stagger
    if (chars1 && chars1.length > 0) {
      tl.to(chars1, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.026,
        ease: 'power2.out'
      }, '-=0.14');
    }

    // 3. Pause briefly on "Oh, hello!" for reading (~0.35s)
    // 4. "Oh, hello!" letters fly up and fade out
    if (chars1 && chars1.length > 0) {
      tl.to(chars1, {
        opacity: 0,
        y: -10,
        duration: 0.14,
        stagger: 0.012,
        ease: 'power2.in'
      }, '+=0.35');
    }

    // Badge 1 fades out smoothly
    tl.to(badge1Ref.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.in'
    }, '-=0.06');

    // 5. In the exact same box position: switch to Badge 2 ("You found me!")
    tl.set(badge1Ref.current, { display: 'none' })
      .set(badge2Ref.current, { display: 'inline-flex' });

    tl.to(badge2Ref.current, {
      opacity: 1,
      scale: 1,
      duration: 0.16,
      ease: 'back.out(1.6)'
    });

    // 6. "You found me!" letters stagger in smoothly
    if (chars2 && chars2.length > 0) {
      tl.to(chars2, {
        opacity: 1,
        y: 0,
        duration: 0.22,
        stagger: 0.024,
        ease: 'back.out(1.4)'
      }, '-=0.08');
    }

    // 7. Pause on "You found me!" for reading (~0.45s)
    // 8. Badge 2 pops down smoothly
    tl.to(badge2Ref.current, {
      scale: 0.88,
      opacity: 0,
      y: -10,
      duration: 0.18,
      ease: 'back.in(1.4)'
    }, '+=0.45');

    // 9. Ruled notebook paper curtain lifts up smoothly revealing the website
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.62,
      ease: 'power4.inOut'
    }, '-=0.04');

  }, { scope: overlayRef });

  if (isFinished) return null;

  const renderChars = (str: string) => {
    return str.split('').map((char, idx) => (
      <span
        key={idx}
        className="splash-char"
        style={{
          display: 'inline-block',
          whiteSpace: char === ' ' ? 'pre' : 'normal'
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div
      ref={overlayRef}
      className="intro-splash-overlay"
      aria-hidden="true"
    >
      <div className="intro-splash-center">
        <div ref={badge1Ref} className="intro-splash-badge badge-1">
          {renderChars('Oh, hello!')}
        </div>
        <div ref={badge2Ref} className="intro-splash-badge badge-2">
          {renderChars('You found me!')}
        </div>
      </div>
    </div>
  );
};
