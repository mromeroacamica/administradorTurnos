import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {
    //crear state formulario
    const [cita, actualizarCita]= useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    })

    //actualizar error con un state

    const [error, actualizarError]=useState(false)

    //funcion actualizar state

    const actualizarState= e =>{
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value 
        })
    };

//extraer los datos de cita

const {mascota,propietario,fecha,hora,sintomas}=cita;

//Cuando el usuario presiona Submit, envia la cita

const submitCita = e=>{
    e.preventDefault();

    //validar
    if(mascota.trim()=== '' || propietario.trim()=== '' || fecha.trim()=== '' || hora.trim()=== '' || sintomas.trim()=== ''){
        actualizarError(true);
        return;
    }

    //eliminar cartel de error
    actualizarError(false);

    //asignar un id
    cita.id = uuidv4()
    // console.log(cita)

    //crear la cita 
    crearCita(cita)

    //reiniciar el form

    actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });    
    
};

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error ?<p className='alerta-error'>Todos los campos son obligatorios</p> : null}

            <form
            onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre Dueño de la Mascota'
                    onChange={actualizarState}
                    value={propietario}

                />

                <label>Nombre Mascota</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}

                />

                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}

                />

                <label>Síntomas</label>
                <textarea 
                className='u-full-width'
                name='sintomas'
                onChange={actualizarState}
                value={sintomas}

                ></textarea>
                <button
                type='submit'
                className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;