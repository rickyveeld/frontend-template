import { useEffect, useState } from 'react';
import { api } from '../services/api';

const Login = () => {
    console.log('hola');
    return (
        <div>
            <h1>LOGIN</h1>

            <h4>Ingresa tu usuario</h4>
            <form>
                <input type="text" placeholder="Usuario" />
            </form>
            <h3>Ingresa tu contrasena</h3>
            <form>
                <input type="password" placeholder="Contrasena" />
            </form>

        </div>
    );
};

export default Login;