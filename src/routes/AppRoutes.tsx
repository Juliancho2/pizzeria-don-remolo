import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePages from '../pages/HomePages';
import LoginPage from '../pages/LoginPage';
import Checkout from '../pages/Checkout';
import {onAuthStateChanged, getAuth} from 'firebase/auth';
import firebaseApp from '../credentials';
import {type AppContextInterface} from '../type';
import appContext from '../context/AppContext';
import DashBoardPage from '../pages/dashboard/DashBoardPage';
import {ProtectRoutes} from '../components/ProtectRoutes';
import Table from '../pages/dashboard/Table';
import EditProduct from '../pages/EditProduct';
import AddProduct from '../pages/AddProduct';
import Footer from '../components/Footer';
import styled from 'styled-components';
import TableOrders from '../pages/dashboard/TableOrders';

const auth = getAuth(firebaseApp);

const Container = styled.div`

`;

const AppRoutes = () => {
	const stateGlobal = useContext<AppContextInterface | undefined>(appContext);

	onAuthStateChanged(auth, userFirebase => {
		if (userFirebase) {
			if (stateGlobal) {
				stateGlobal.setState({
					...stateGlobal.state,
					user: {
						email: userFirebase.email,
						token: userFirebase.getIdToken,
						isLogged: true,
					},
				});
			} else {
				console.log('ocurrio un error');
			}
		}
	});

	return (
		<Container>
			<Routes>
				<Route path={'/'} element={<HomePages />} />
				<Route path={'/checkout'} element={<Checkout />} />
				<Route path={'/login'} element={<LoginPage />} />
				<Route path={'/menu'} element={<MenuPage />} />
				<Route element={<ProtectRoutes isAllowed={localStorage.getItem('adminIsLogged') === 'true'} />} >
					<Route path={'/dashboard'} element={<DashBoardPage><h2>Este es el home</h2></DashBoardPage>}/>
					<Route path={'/dashboard/products'} element={<DashBoardPage> <Table></Table> </DashBoardPage>} />
					<Route path={'/dashboard/orders'} element={<DashBoardPage><TableOrders/></DashBoardPage>} />
					<Route path={'dashboard/products/edit/:id'} element={<EditProduct/>} />
					<Route path={'dashboard/products/add'} element={<AddProduct/>} />
				</Route>

			</Routes>

		</Container >
	);
};

export default AppRoutes;
