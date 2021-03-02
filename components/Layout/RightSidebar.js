import React from "react";
import RolesTable from "../RolesTable";

const RightSidebar = () => {
	return (
		<>
			<aside className="p-4">
				<div>
					<RolesTable />
				</div>
			</aside>
		</>
	);
};

export default RightSidebar;
