const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [] // Inicialmente vacío
        },
        actions: {
            addContact: (contact) => {
                const store = getStore();
                setStore({
                    contacts: [...store.contacts, contact]
                });
            },
            deleteContact: (id) => {
                const store = getStore();
                setStore({
                    contacts: store.contacts.filter(contact => contact.id !== id)
                });
            },
            editContact: (updatedContact) => {
                const store = getStore();
                setStore({
                    contacts: store.contacts.map(contact =>
                        contact.id === updatedContact.id
                            ? { ...contact, ...updatedContact }
                            : contact
                    )
                });
            },
            loadContacts: () => {
                // Función para cargar contactos desde la API
                fetch("https://playground.4geeks.com/apis/fake/contact/")
                    .then((response) => response.json())
                    .then((data) => {
                        // Suponiendo que la API devuelve una lista de contactos
                        setStore({ contacts: data });
                    })
                    .catch((error) => {
                        console.error("Error al cargar contactos:", error);
                    });
            }
        }
    };
};

export default getState;