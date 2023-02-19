import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../Redux/store';
import { LoginParsistenceAction } from '../../Redux/Action';
import errorMessage from '../../Utils/errorMessage';
import Loading from '../../Components/Loading';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import dashboard_Navbar from '../../Constant/Dashboard_Navbar';

const index = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const dispatch = useDispatch();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const navigator = useNavigate();
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { loading, error, message } = useSelector(
		(state: RootStore) => state.Parsistences
	);

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		dispatch(LoginParsistenceAction());
	}, [dispatch]);

	// USER SINGOUT
	// const singout = () => {
	// 	localStorage.removeItem('token');
	// 	localStorage.removeItem('user');
	// 	navigator('/login');
	// 	window.location.reload();
	// };

	if (error) {
		errorMessage(error);
	}

	if (message) {
		const user = message?.user;

		// SAVE TOKEN AND USR IN LOCAL STORAGE
		localStorage.setItem('user', JSON.stringify(user));
	}
	if (loading) {
		return <Loading />;
	}
	return (
		<>
			<div className="flex">
				<div className="flex flex-col h-screen p-3 bg-white shadow w-60">
					<div className="space-y-3">
						<div className="flex items-center">
							<h2 className="text-xl font-bold">Dashboard</h2>
						</div>
						<div className="flex-1">
							<ul className="pt-2 pb-4 space-y-1 text-sm">
								{dashboard_Navbar.map((item, index) => (
									<li className="rounded-sm">
										<Link
											to={item.route}
											className="flex items-center p-2 space-x-3 rounded-md"
										>
											<span>{item.title}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="container mx-auto mt-12 ml-2">
					<Outlet></Outlet>
				</div>
			</div>
		</>
	);
};

export default index;
