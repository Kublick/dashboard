import React from "react";
import { Grid, _ } from "gridjs-react";
import { users } from "../fakedata/data";
import RightSidebar from "./Layout/RightSidebar";

const MainTable = () => {
	return (
		<div>
			<h1 className="mb-4 text-xl font-bold">Usuarios</h1>
			<div className="grid grid-cols-4">
				<div className="col-span-3">
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
							user.display_name,
							user.email,
							user.is_active,
							_(
								<div className="flex flex-row justify-evenly">
									<button onClick={console.log("edit")}>
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
												d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
											/>
										</svg>
									</button>
									<button onClick={console.log("erase")}>
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
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
									</button>
									<button onClick={console.log("change password")}>
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
												d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
											/>
										</svg>
									</button>
									<button onClick={console.log("Role change popup")}>
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
												d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
											/>
										</svg>
									</button>
								</div>
							),
						])}
						pagination={{
							enabled: true,
							limit: 10,
						}}
					/>
				</div>

				<div className="mx-4">
					<RightSidebar />
				</div>
			</div>
		</div>
	);
};

export default MainTable;
