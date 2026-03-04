import { useFadeIn } from '../hooks/useFadeIn';

/**
 * Wrapper that fades + slides up its children when they enter the viewport.
 * Use `delay` (ms) to stagger sibling elements.
 */
export default function FadeInSection({ children, className = '', delay = 0, type = 'up' }) {
  const { ref, isVisible } = useFadeIn();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${type === 'up' ? 'fade-up' : 'fade-in'} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
