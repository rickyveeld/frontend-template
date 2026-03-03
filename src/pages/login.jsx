import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const data = await api.post('/auth/login', { email, password });
            console.log('respuesta login', data);
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setMessage('Error en credenciales');
        }
    };

    return (
        <div>
            <h1>LOGIN</h1>

            <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex flex-col gap-4">
                <div>
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="Usuario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded px-2 py-1"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Contraseña</label>
                    <input
                        type="password"
                        placeholder="Contrasena"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded px-2 py-1"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Entrar
                </button>
            </form>
            {message && <p className="mt-4 text-center text-red-600">{message}</p>}
        </div>
    );
};

export default Login;