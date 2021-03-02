import React from "react";
import { useTable } from "react-table";
import { users } from "../fakedata/data";

const Dashboard = () => {
	const data = React.useMemo(
		() => [
			{
				col1: "Hello",
				col2: "World",
			},
			{
				col1: "react-table",
				col2: "rocks",
			},
			{
				col1: "whatever",
				col2: "you want",
			},
		],
		[]
	);

	const columns = React.useMemo(
		() => [
			{
				Header: "",
				accessor: "user.picture_url", // accessor is the "key" in the data
			},
			{
				Header: "Display Name",
				accessor: "user.name",
			},
			{
				Header: "Email",
				accessor: "user.email",
			},
			{
				Header: "Status",
				accessor: "user.status",
			},
			{
				Header: "Actions",
				accessor: "user.actions",
			},
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data });

	return (
		<div>
			<table {...getTableProps()} style={{ border: "solid 1px blue" }}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps()}
									style={{
										borderBottom: "solid 3px red",
										background: "aliceblue",
										color: "black",
										fontWeight: "bold",
									}}
								>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td
											{...cell.getCellProps()}
											style={{
												padding: "10px",
												border: "solid 1px gray",
												background: "papayawhip",
											}}
										>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>

			{users.map((user) => (
				<p key={user.id}>{user.name}</p>
			))}
		</div>
	);
};

export default Dashboard;
