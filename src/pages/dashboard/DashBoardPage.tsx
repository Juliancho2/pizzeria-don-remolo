import React, {useContext, useEffect} from 'react';
import DashboardHeader from './DashBoardHeader';
import Dashboard from './DashBoard';
import appContext from '../../context/AppContext';
import {type AppContextInterface} from '../../type';
import {getAllTodos} from '../../services/getDocs';

type Props = {
	children: React.ReactNode;
};
const DashBoardPage = ({children}: Props) => {
	const state = useContext<AppContextInterface | undefined>(appContext);
	useEffect(() => {
		(async () => {
			try {
				const todos = await getAllTodos();
				state?.getProducts(todos);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
	return (
		<Dashboard>
			<DashboardHeader/>
			{children}
		</Dashboard>
	);
};

export default DashBoardPage;
