import React from "react";
import {
	List,
	Datagrid,
	TextField,
	EditButton,
	DeleteButton,
} from "react-admin";
const CompanyList = (props) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source="id" />
				<TextField source="name" />
				<TextField source="legal_number" />
				<TextField source="incorporation_country" />
				<TextField source="website" />
				<EditButton basePath="/companies" />
				<DeleteButton basePath="/companies" />
			</Datagrid>
		</List>
	);
};

export default CompanyList;
