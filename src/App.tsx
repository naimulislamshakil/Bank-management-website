import React from 'react';
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

function App() {
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
