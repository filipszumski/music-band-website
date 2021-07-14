import { useEffect, useState } from "react"

export const useIsScrolledDown = () => {
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                setIsScrolledDown(true);
            } else {
                setIsScrolledDown(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return isScrolledDown;
}