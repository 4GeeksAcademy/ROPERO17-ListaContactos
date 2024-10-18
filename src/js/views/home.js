import React, { useContext } from "react"; // Asegúrate de incluir useContext
import ContactView from "./contactview";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; // Asegúrate de importar el contexto

export const Home = () => {
  const { store } = useContext(Context); 

  return (
      <div>
          <header className="header">
              <Link to="/add-contact">
                  <button className="add-contact-button">Agregar Contacto</button>
              </Link>
          </header>
          <ContactView contacts={store.contacts} /> 
      </div>
  );
};