import { useEffect, useState } from 'react';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    if (!isVisible) {
        return null
    }

    return (
        <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            ↑
        </button>
    )
}

export default BackToTop;