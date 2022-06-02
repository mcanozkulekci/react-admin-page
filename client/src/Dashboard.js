import * as React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { Loading, useGetList } from "react-admin";

const Dashboard = () => {
	const { data, isLoading, error } = useGetList("companies", {
		pagination: { page: 1, perPage: 10 },
		sort: { field: "id", order: "DESC" },
	});
	if (isLoading) {
		return <Loading />;
	}
	if (error) {
		return <p>ERROR</p>;
	}
	return (
		<>
			<h1>Homepage</h1>
			<ul>
				{data.map((record) => (
					<li key={record.id}>{record.name}</li>
				))}
			</ul>
			<p>There are {data.length} number of companies in the system</p>
		</>
	);
};

export default Dashboard;
