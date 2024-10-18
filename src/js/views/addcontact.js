import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/addContact.css";

const AddContact = () => {
    const { actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        image: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
       
        fetch("https://playground.4geeks.com/apis/fake/contact/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                full_name: contact.name,
                email: contact.email,
                phone: contact.phone,
                address: "",
                image: contact.image || "https://via.placeholder.com/150",
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            actions.addContact(data); // Agregar el contacto al contexto
            navigate("/contacts"); // Redirigir a la vista de contactos
        })
        .catch((error) => {
            console.log("Error al agregar contacto:", error);
        });
    };

    // Función para redirigir a la vista de contactos
    const verContactos = () => {
        navigate("/contacts");
    };

    return (
        <div className="add-contact-container">
            <h2>Agregar Nuevo Contacto</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input 
                        type="text" 
                        name="name" 
                        value={contact.name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={contact.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Teléfono:
                    <input 
                        type="tel" 
                        name="phone" 
                        value={contact.phone} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Imagen URL:
                    <input 
                        type="text" 
                        name="image" 
                        value={contact.image} 
                        onChange={handleChange} 
                    />
                </label>
                <button type="submit">Agregar Contacto</button>
            </form>
            <button onClick={verContactos} className="view-contacts-button">
                Ver Contactos
            </button>
        </div>
    );
};

export default AddContact;