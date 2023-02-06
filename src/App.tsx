import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import Register from './Pages/Register';

function App() {
	return (
		<div className="container mx-auto">
			<Navbar />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
