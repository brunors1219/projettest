"use client";
import { createContext, useContext } from 'react';

const whatsappContacts = [
    { contato: '5531996268192' }
];

const UnitsContext = createContext(whatsappContacts);

export const useUnits = () => useContext(UnitsContext);

export const UnitsProvider = ({ children }) => {
    return (
        <UnitsContext.Provider value={whatsappContacts}>
            {children}
        </UnitsContext.Provider>
    );
};
