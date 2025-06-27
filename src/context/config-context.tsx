import { createContext, useContext, useEffect, useState } from "react"



type ConfigState = {
    isDarkMode: boolean
    toggleMode: () => void
}

const ConfigContext = createContext<ConfigState | undefined>(undefined);

const ConfigProvider = ({children}:{children:React.ReactNode}) => {

    const [isDarkMode, setIsDarkMode] = useState(false);


    const toggleMode = () => {
        if(isDarkMode){
            setIsDarkMode(false)
            localStorage.setItem("isDarkMode", "false")
        } else {
            setIsDarkMode(true)
            localStorage.setItem("isDarkMode", "true")
        }
    }
    
    useEffect(()=> {

        const localDarkMode = JSON.parse(localStorage.getItem("isDarkMode") || "false");
        if(localDarkMode) {
            setIsDarkMode(Boolean(localDarkMode))
        }
        
    },[])

    const value = {
        isDarkMode,
        toggleMode
    }

    return (
        <ConfigContext.Provider value={value}>
            {children}
        </ConfigContext.Provider>
    )
}

const useConfig = () => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error("useConfig must be used within a ConfigProvider.");
    }
    return context;
}

export {
    useConfig,
    ConfigProvider
}