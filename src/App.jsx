import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Productos from './pages/Productos';
import Login from './pages/login';
import ProtectedRoute from './components/layout/ProtectedRoute';

const Dashboard = () => (
  <div>
    <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
    <p className="mt-4 text-slate-600">Bienvenido al sistema. Selecciona una opción del menú.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* pública: login */}
        <Route path="/login" element={<Login />} />

        {/* rutas que requieren token */}
        <Route element={<ProtectedRoute />}> 
          {/* redirige raíz dentro del grupo protegido */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* layout con menú envuelve todas las páginas privadas */}
          <Route path="/" element={<Layout />}> 
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="productos" element={<Productos />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;