import React from "react";
import ContactView from "./contactview";
import "../../styles/home.css";
import { Link } from "react-router-dom";
export const Home = () => (
	
	<div>
    <header className="header">
      <Link to="/add-contact">
        <button className="add-contact-button">Agregar Contacto</button>
      </Link>
    </header>
    <ContactView />
  </div>
		
	
);
