import React from "react";
import {
	List,
	Datagrid,
	TextField,
	EditButton,
	DeleteButton,
	ReferenceField,
	TextInput,
	ReferenceInput,
	SelectInput,
	SimpleList,
	Button,
} from "react-admin";
import { useMediaQuery } from "@mui/material";

const productFilters = [
	<TextInput source="q" label="Search" alwaysOn />,
	<ReferenceInput source="userId" label="User" reference="users">
		<SelectInput optionText="name" />
	</ReferenceInput>,
];

const ProductList = (props) => {
	const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<List {...props} filters={productFilters}>
			{isSmall ? (
				<SimpleList
					primaryText={(record) =>
						`${record.name}` + " / " + `${record.category}`
					}
					secondaryText={(record) => (
						<ReferenceField
							label="Company"
							source="company_id"
							reference="companies"
						>
							<TextField source="name" />
						</ReferenceField>
					)}
					tertiaryText={
						<Button>
							<EditButton />
							<DeleteButton />
						</Button>
					}
				/>
			) : (
				<Datagrid>
					<TextField source="id" />
					<TextField source="name" />
					<TextField source="category" />
					<TextField source="amount" />
					<TextField source="amount_unit" />

					<ReferenceField
						label="Company"
						source="company_id"
						reference="companies"
					>
						<TextField source="name" />
					</ReferenceField>
					<EditButton />
					<DeleteButton />
				</Datagrid>
			)}
		</List>
	);
};

export default ProductList;
