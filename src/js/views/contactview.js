import React, { useContext } from "react";
import { Context } from "../store/appContext";

const ContactView = () => {
    const { store, actions } = useContext(Context);

    const handleDelete = (id) => {
        actions.deleteContact(id);
    };

    const handleEdit = (id) => {
        const contactToEdit = store.contacts.find(contact => contact.id === id);

        const newName = prompt("Ingrese el nuevo nombre:", contactToEdit.name);
        const newEmail = prompt("Ingrese el nuevo correo electrónico:", contactToEdit.email);
        const newPhone = prompt("Ingrese el nuevo número de teléfono:", contactToEdit.phone);

        if (newName && newEmail && newPhone) {
            actions.editContact({
                id,
                name: newName,
                email: newEmail,
                phone: newPhone,
                image: contactToEdit.image
            });
        }
    };

    return (
        <div className="contact-list">
            {store.contacts.map((contact) => (
                <div key={contact.id} className="contact-card">
                    <img src={contact.image} alt={contact.name} />
                    <div className="contact-info">
                        <h3>{contact.name}</h3>
                        <p>Email: {contact.email}</p>
                        <p>Teléfono: {contact.phone}</p>
                    </div>
                    <div className="contact-actions">
                        <button onClick={() => handleEdit(contact.id)}>Editar</button>
                        <button onClick={() => handleDelete(contact.id)}>X</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactView;