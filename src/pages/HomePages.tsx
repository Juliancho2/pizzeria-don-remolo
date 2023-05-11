import React, {useContext, useEffect} from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Products from '../components/Products';
import NavCategories from '../components/NavCategories';
import ContainerHome from '../containers/ContainerHome';
import {type AppContextInterface} from '../type';
import appContext from '../context/AppContext';
import Footer from '../components/Footer';

const HomePages = () => {
	const state = useContext<AppContextInterface | undefined>(appContext);

	return (
		<div>
			<Header></Header>
			<ContainerHome />
		</div>
	);
};

export default HomePages;
