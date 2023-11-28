import {useEffect, useState} from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const markSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        markSize();
        window.addEventListener("resize", markSize);

        return () => window.removeEventListener("resize", markSize);

    }, [])

    return windowSize;
}

export default useWindowSize;