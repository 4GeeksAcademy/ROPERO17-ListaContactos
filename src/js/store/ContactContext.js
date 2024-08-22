import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const ContactContext = createContext();

// Proveedor del contexto
export const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    return (
        <ContactContext.Provider value={{ contacts, addContact }}>
            {children}
        </ContactContext.Provider>
    );
};

// Custom hook para usar el contexto
export const useContacts = () => useContext(ContactContext);