import { createContext, useEffect, useState } from "react";

export const GeneralContext = createContext<{
    screenWidth: number
}>({
    screenWidth: 0
});


const GeneralContextProvider = ({children}: {children: React.ReactNode}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const listener = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener);
        }
    }, []);

    return (
        <GeneralContext.Provider value={{ screenWidth }}>
            {children}
        </GeneralContext.Provider>
    );
}

export default GeneralContextProvider;