import React, { useContext, useRef } from "react";
import { AppContextInterface } from "../type";
import appContext from "../context/AppContext";
import styled from "styled-components";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import AllCategoryes from "../components/AllCategoryes";

const Container = styled.div`

&>p{
    backgraund = #000;
}
`;

const MenuPage = () => {

    const state = useContext<AppContextInterface | undefined>(appContext);
  
    const productsRef = useRef(null);
    const bannerRef = useRef(null);

	return (
		<Container>
			<Banner productsRef={productsRef}></Banner>
			<AllCategoryes bannerRef={bannerRef} productsRef={productsRef}/>
			<Footer/>
		</Container>
    );
  };
  
  
  export default MenuPage;