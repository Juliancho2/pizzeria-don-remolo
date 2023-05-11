import React, {useContext} from 'react';
import styled from 'styled-components';
import homeicon from '../../assets/icons/homeicon.png';
import producticon from '../../assets/icons/producticon.png';
import dashboardicon from '../../assets/icons/dashboardicon.png';
import ordericon from '../../assets/icons/ordericon.png';
import logouticon from '../../assets/icons/logouticon.png';
import {type AppContextInterface} from '../../type';
import appContext from '../../context/AppContext';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, signOut} from 'firebase/auth';
import firebaseApp from '../../credentials';

const auth = getAuth(firebaseApp);

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

`;

const Sidebar = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content:space-between;
	padding-bottom: 40px;
  background-color: #201368;
  width: 200px;
  align-items: center;
  color: #fff;
  &>ul{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 50px;
	padding: 0;
	height: 300px;
	width: 100%;
	&>li{
		list-style: none;
		width: 110px;
		&>a{
			display: flex;
			align-items: center;
			gap: 5px;
			font-size: 1.5rem;
			text-decoration: none;
			width: 100%;
			transition: ease-in .2s ;
			color: #f3f3f3;
			justify-content: center;
			font-weight: 600;
			border-radius: 3px;
			&:hover{
				background: #6a2951;
				padding: 5px;
				color: #fff;
				
			}
		}
	}
  }
  &>div{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 80px;
  }

`;

const MainContent = styled.div`
  flex-grow: 1;
`;

type DashboardProps = {
	children: React.ReactNode;
};

const Dashboard: React.FC<DashboardProps> = ({children}) => {
	const state = useContext<AppContextInterface | undefined>(appContext);
	const navigate = useNavigate();

	const handleLogOut = async () => {
		try {
			await signOut(auth);
			navigate('/');
			localStorage.removeItem('adminIsLogged');
			state?.setState({
				...state.state,
				user: {
					email: '',
					token: '',
					isLogged: false,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<DashboardContainer>
			<Sidebar>
				<div>
					<img width={50} src={dashboardicon} alt='' />
					<h3>Dashboard</h3>
				</div>

				<ul>
					<li><Link to='/dashboard'><img width={15} src={homeicon}></img>Home</Link></li>
					<li><Link to='/dashboard/products'> <img width={18} src={producticon} alt='' /> Products</Link></li>
					<li><Link to='/dashboard/orders'> <img width={18} src={ordericon} alt='' /> Orders</Link></li>
					<li onClick={handleLogOut}><Link to='#' > <img width={18} src={logouticon} alt='' /> Log out</Link></li>
				</ul>
				<div>
				All rights reserved  © 2023
				</div>
			</Sidebar>
			<MainContent>{children}</MainContent>
		</DashboardContainer>
	);
};

export default Dashboard;
