import React from 'react'
import './sacarturno.css'



const Turnos = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">Sacar Turnos</h1>
                <p className="card-text">Aquí puedes encontrar información para sacar turnos en nuestra clínica.</p>
                <h5 className="card-subtitle mb-4 text-muted">Tipos de Médicos</h5>
                <div className='row'>
                    <div className='col-12'>
                        <ul className="list-group ">
                            <li className="list-group-item mb-2 zoom celeste" type="submit">Ginecologia</li>
                            <li className="list-group-item mb-2 zoom celeste" type="submit">Pediatra</li>
                            <li className="list-group-item  mb-2 zoom celeste" type="submit">Dermatólogia</li>
                            <li className="list-group-item  mb-2 zoom celeste" type="submit">Clinica</li>
                            <li className="list-group-item  mb-2 zoom celeste" type="submit">Odontologia</li>
                            <li className="list-group-item  mb-2 zoom celeste" type="submit">Nutricionista</li>
                            <li className="list-group-item  mb-2 zoom celeste" type="submit">Urologia</li>
                            <li className="list-group-item  mb-2 zoom celeste" type="submit">Cardiologia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Turnos;