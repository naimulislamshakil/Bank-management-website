import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const location = useLocation();

	const token = localStorage.getItem('token');
	const user = JSON.parse(localStorage.getItem('user')!);

	if (!token && !user) {
		console.log('jhddsdjsh');
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export default RequireAuth;
