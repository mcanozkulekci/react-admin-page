import React from "react";
import {
	Create,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
} from "react-admin";
const ProductCreate = (props) => {
	return (
		<Create title="Create a Product" {...props}>
			<SimpleForm>
				<ReferenceInput source="company_id" reference="companies">
					<SelectInput optionText="name" />
				</ReferenceInput>
				<TextInput source="name" />
				<TextInput source="category" />
				<TextInput source="amount" />
				<TextInput source="amount_unit" />
			</SimpleForm>
		</Create>
	);
};

export default ProductCreate;
