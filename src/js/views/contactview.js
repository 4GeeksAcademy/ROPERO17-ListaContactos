import React, { useState } from "react";

const initialContacts = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+123 456 789",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        phone: "+987 654 321",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "michael@example.com",
        phone: "+456 789 123",
        image: "https://randomuser.me/api/portraits/men/56.jpg"
    },
   
];

const ContactView = () => {
    const [contacts, setContacts] = useState(initialContacts);

    
    const handleDelete = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
    };

   
    const handleEdit = (id) => {
        const contactToEdit = contacts.find(contact => contact.id === id);

        const newName = prompt("Ingrese el nuevo nombre:", contactToEdit.name);
        const newEmail = prompt("Ingrese el nuevo correo electrónico:", contactToEdit.email);
        const newPhone = prompt("Ingrese el nuevo número de teléfono:", contactToEdit.phone);

        if (newName && newEmail && newPhone) {
            const updatedContacts = contacts.map(contact =>
                contact.id === id 
                ? { ...contact, name: newName, email: newEmail, phone: newPhone }
                : contact
            );
            setContacts(updatedContacts);
        }
    };

    return (
        <div className="contact-list">
            {contacts.map((contact) => (
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