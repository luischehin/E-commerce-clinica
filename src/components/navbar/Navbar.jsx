import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-info container-fluid">
            <a className="navbar-brand" href="#">Clinica Web</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <a className="inicio nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link active  " aria-current="page" href="#">Nosotros</a>
                    </li>
                </ul>
                <form className="formbuscador d-flex" role="search">
                    <input className="buscador form-control " type="search" placeholder="Buscar" aria-label="Search"></input>
                    <button className="botonbuscar btn btn-dark" type="submit">Buscar</button>
                </form>
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className="nav-link active" aria-current="page" href="#">Iniciar Sesión</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;