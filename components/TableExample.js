import React from "react";
import { Grid, _ } from "gridjs-react";
import { users } from "../fakedata/data";

const TableExample = () => {
	return (
		<Grid
			search={true}
			language={{
				search: {
					placeholder: "🔍 Buscar Usuario...",
				},
				pagination: {
					previous: "Anterior ",
					next: "Siguiente",
					of: "de un total de",
					to: "de",
					showing: "Mostrando",
					results: () => "registros",
				},
			}}
			columns={["Display Name", "Email", "Status", "Actions"]}
			data={users.map((user) => [
				user.name,
				user.email,
				user.is_active,
				_(
					<div className="flex flex-row">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-4 h-4 mx-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
				),
			])}
			pagination={{
				enabled: true,
				limit: 10,
			}}
		/>
	);
};

export default TableExample;
