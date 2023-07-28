import React from 'react';
import './styles/Registro.css'

const Registro = () => {
    return (
        <div className="registro">
            <div className="seccion-registro">
                <form>
                    <i className="bi-person-fill" style={{ fontSize: '2rem', color: '#3ABDC9' }}></i>
                    <label for="exampleInputName1" className="form-label">Nombre</label>
                    <input type="input" className="form-control" id="exampleInputName1" />

                    <i className="bi-person-fill" style={{ fontSize: '2rem', color: '#3ABDC9' }}></i>
                    <label for="exampleInputLastName1" className="form-label">Apellido</label>
                    <input type="input" className="form-control" id="exampleInputLastName1" />

                    <i className="bi bi-calendar-week-fill" style={{ fontSize: '2rem', color: '#3ABDC9' }}></i>
                    <label for="exampleInputDate" className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="exampleDate" />

                    <i className="bi bi-mailbox2" style={{ fontSize: '2rem', color: '#3ABDC9' }}></i>
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">NO COMPARTIREMOS TU MAIL CON NADIE MAS</div>


                    <i className="bi bi-lock-fill" style={{ fontSize: '2rem', color: '#3ABDC9' }}></i>
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />


                    <button type="submit" className="registro">Registrarse</button>
                    <button type="submit" className="cancelar">Cancelar</button>
                </form>


            </div>
        </div>
    );
};

export default Registro;
