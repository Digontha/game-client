import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';


const PrivateRoute = ({ children }) => {

    const location = useLocation()

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;