import React from "react";
import {
	Edit,
	FunctionField,
	ReferenceField,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
} from "react-admin";
const ProductEdit = () => {
	return (
		<Edit title="Edit Product">
			<SimpleForm>
				<TextInput disabled source="id" />
				<TextInput source="name" />
				<TextInput source="category" />
				<TextInput source="amount" />
				<TextInput source="amount_unit" />
				<ReferenceInput source="company_id" reference="companies">
					<SelectInput optionText="name" />
				</ReferenceInput>
			</SimpleForm>
		</Edit>
	);
};

export default ProductEdit;
