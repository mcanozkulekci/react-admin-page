import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";
const CompanyCreate = (props) => {
	return (
		<Create title="Add a Company" {...props}>
			<SimpleForm>
				<TextInput disabled source="id" />
				<TextInput source="name" />
				<TextInput source="legal_number" />
				<TextInput source="incorporation_country" />
				<TextInput source="website" />
			</SimpleForm>
		</Create>
	);
};

export default CompanyCreate;
