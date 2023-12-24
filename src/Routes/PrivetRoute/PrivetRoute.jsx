import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../global/Loading';

const PriveteRoute = ({ children }) => {

    const { currentUser, loading } = useContext(AuthContext);

    const location = useLocation();


    if (loading) {
        return <Loading />
    }


    if (!currentUser) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PriveteRoute;