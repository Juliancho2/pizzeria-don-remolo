import React, {useRef} from 'react';
import NavCategories from '../components/NavCategories';
import Products from '../components/Products';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Container = styled.div`
	position: relative;
	/* background: #EFEFEF; */
`;
const ContainerHome = () => {
	const productsRef = useRef(null);
	const bannerRef = useRef(null);

	return (
		<Container>
			<Banner productsRef={productsRef}></Banner>
			<NavCategories productsRef={productsRef}/>
			<Products bannerRef={bannerRef} productsRef={productsRef}/>
			<Footer/>
		</Container>
	);
};

export default ContainerHome;
