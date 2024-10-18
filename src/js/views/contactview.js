import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { Context } from "../store/appContext";
import "../../styles/contactView.css";

const ContactView = () => {
    const { store, actions } = useContext(Context); // Obtener el store y las acciones
    const navigate = useNavigate(); // Hook para navegar entre rutas

    const deleteContact = (id) => {
        actions.deleteContact(id); // Usar la acción para eliminar contacto
    };

    const editContact = (id) => {
        const contactToEdit = store.contacts.find((contact) => contact.id === id);
        if (!contactToEdit) {
            alert("Contacto no encontrado");
            return;
        }

        const newName = prompt("Ingrese el nuevo nombre:", contactToEdit.full_name);
        const newEmail = prompt("Ingrese el nuevo correo electrónico:", contactToEdit.email);
        const newPhone = prompt("Ingrese el nuevo número de teléfono:", contactToEdit.phone);
        const newAddress = prompt("Ingrese la nueva dirección:", contactToEdit.address);

        if (newName && newEmail && newPhone && newAddress) {
            const updatedContact = {
                id, 
                full_name: newName,
                email: newEmail,
                phone: newPhone,
                address: newAddress,
            };
            actions.editContact(updatedContact); 
        } else {
            alert("Todos los campos deben ser completados");
        }
    };

    const goToAddContact = () => {
        navigate("/add-contact"); 
    };

    return (
        <div className="contact-list">
            <div className="add-contact-button-container">
                <button onClick={goToAddContact} className="add-contact-button">Agregar Contacto</button>
            </div>
            {store.contacts.length > 0 ? (
                store.contacts.map((contact) => (
                    <div key={contact.id} className="contact-card">
                        <img src="https://via.placeholder.com/150" alt={contact.full_name} />
                        <div className="contact-info">
                            <h3>{contact.full_name}</h3>
                            <p>Email: {contact.email}</p>
                            <p>Teléfono: {contact.phone}</p>
                            <p>Dirección: {contact.address}</p>
                        </div>
                        <div className="contact-actions">
                            <button onClick={() => editContact(contact.id)}>Editar</button>
                            <button onClick={() => deleteContact(contact.id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay contactos disponibles.</p>
            )}
        </div>
    );
};

export default ContactView;