import { useState, useEffect } from 'react'

function useScrollY() {
    const [scrollY, setScrollY] = useState(window.scrollY);

    const handleScollY = () => {
        setScrollY(window.scrollY)
    }
    
    useEffect(()=>{
        window.addEventListener('scroll', handleScollY);
        return () => {
            window.removeEventListener('scroll', handleScollY)
        }
    }, [])

    return scrollY;
}

export default useScrollY
