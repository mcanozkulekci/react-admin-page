import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
const CompanyEdit = (props) => {
	return (
		<Edit title="Edit Company" {...props}>
			<SimpleForm>
				<TextInput disabled source="id" />
				<TextInput source="name" />
				<TextInput source="legal_number" />
				<TextInput source="incorporation_country" />
				<TextInput source="website" />
			</SimpleForm>
		</Edit>
	);
};

export default CompanyEdit;
