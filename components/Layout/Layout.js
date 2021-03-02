import React from "react";
import LeftSidebar from "./LeftSidebar";

const Layout = ({ children }) => {
	return (
		<>
			<div className="min-h-screen bg-gray-300">
				<div className="flex min-h-screen">
					<LeftSidebar />
					<main className="p-5 sm:h-min-h-screen">{children}</main>
				</div>
			</div>
		</>
	);
};

export default Layout;
