import React from "react";
import { roles, users } from "../fakedata/data";

const RolesTable = () => {
	console.log("los roles", roles);

	return (
		<div>
			<h1 className="mb-4 text-xl font-bold">Roles</h1>
			<div className="py-2 mx-4 my-2 border-t-2 border-black">
				<p className="text-base font-light ">Administrator</p>
				{users.map((user) => (
					<p key={user.id} className="text-xs">
						{user.name}
					</p>
				))}
			</div>
			<div className="py-2 mx-4 my-2 border-t-2 border-black ">
				<p>Customer Care</p>
			</div>
			<div className="py-2 mx-4 my-2 border-t-2 border-black ">
				<p>Developers</p>
			</div>
			<div className="py-2 mx-4 my-2 border-t-2 border-black ">
				<p>Quality Assurance</p>
			</div>
			<div className="py-2 mx-4 my-2 border-t-2 border-black ">
				<p>Operations</p>
			</div>
		</div>
	);
};

export default RolesTable;
