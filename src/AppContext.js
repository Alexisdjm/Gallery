import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isPortadaVisible, setIsPortadaVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    const togglePortada = () => {
        if (isPortadaVisible) {
            setIsPortadaVisible(false);
            setTimeout(() => setShouldRender(false), 500); // Esperar la duración de la transición (0.5s)
        } else {
            setShouldRender(true);
            setIsPortadaVisible(true);
        }
    };

    return (
        <AppContext.Provider value={{ isPortadaVisible, togglePortada, shouldRender }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
