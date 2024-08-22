const getState = ({ getStore, getActions, setStore }) => {
	return {
        store: {
            contacts: [] 
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
            }
        }
    };
};

export default getState;