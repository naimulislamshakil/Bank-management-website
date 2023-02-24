import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import dashboard_Navbar from '../../Constant/Dashboard_Navbar';

const index = () => {
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
