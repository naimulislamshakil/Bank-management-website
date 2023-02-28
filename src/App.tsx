import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
import NotFound from './Pages/NotFound';
import CreateAAccount from './Pages/CreateAAccount';
import DashHomepage from './Pages/Dash_Homepage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Components/RequireAuth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootStore } from './Redux/store';
import { LoginParsistenceAction } from './Redux/Action';
import Loading from './Components/Loading';

function App() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dispatch = useDispatch();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const navigator = useNavigate();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { loading, message } = useSelector(
		(state: RootStore) => state.Parsistences
	);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		dispatch(LoginParsistenceAction());
	}, [dispatch]);

	if (message) {
		const user = message?.user;

		// SAVE TOKEN AND USR IN LOCAL STORAGE
		localStorage.setItem('user', JSON.stringify(user));
	}
	if (loading) {
		return <Loading />;
	}

	return (
		<div className="container mx-auto">
			<Navbar />
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/dashboard"
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				>
					<Route index element={<DashHomepage />} />
					<Route
						path="/dashboard/create_a_account"
						element={<CreateAAccount />}
					/>
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
