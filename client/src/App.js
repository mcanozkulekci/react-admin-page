import React from "react";
import restProvider from "ra-data-simple-rest";
import { Admin, Resource } from "react-admin";
import ProductList from "./components/Product/ProductList";
import ProductCreate from "./components/Product/ProductCreate";
import ProductEdit from "./components/Product/ProductEdit";
import CompanyList from "./components/Company/CompanyList";
import CompanyCreate from "./components/Company/CompanyCreate";
import CompanyEdit from "./components/Company/CompanyEdit";
import authProvider from "./authProvider";
import Dashboard from "./Dashboard";

function App() {
	return (
		<main className="App">
			<Admin
				dashboard={Dashboard}
				authProvider={authProvider}
				dataProvider={restProvider("http://localhost:3000")}
			>
				<Resource
					name="products"
					list={ProductList}
					edit={ProductEdit}
					create={ProductCreate}
				/>
				<Resource
					name="companies"
					list={CompanyList}
					create={CompanyCreate}
					edit={CompanyEdit}
				/>
			</Admin>
		</main>
	);
}

export default App;
