import { useEffect, useRef, useState } from 'react';

function Reveal({
  children,
  className = '',
  delay = 0,
}) {
    const elementRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = elementRef.current

        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    const classes = [
        'reveal',
        isVisible ? 'reveal--visible' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div
            ref={elementRef}
            className={classes}
            style={{ '--reveal-delay': `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default Reveal;