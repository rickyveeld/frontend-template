import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const token = localStorage.getItem('token');
    // If no token stored, redirect to login
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
};

export default ProtectedRoute;