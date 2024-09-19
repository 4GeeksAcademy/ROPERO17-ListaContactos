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
        actions.addContact(contact);
        navigate("/");
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
        </div>
    );
};

export default AddContact;