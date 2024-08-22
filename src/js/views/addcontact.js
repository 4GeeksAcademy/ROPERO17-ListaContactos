import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/addContact.css";

const AddContact = () => {
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