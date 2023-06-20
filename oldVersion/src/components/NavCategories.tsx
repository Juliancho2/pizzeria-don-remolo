import React from 'react';
import styled from 'styled-components';
import {type AppContextInterface} from '../type';
import appContext from '../context/AppContext';
import {useContext} from 'react';

const Container = styled.div`
    position: sticky;
    max-width: 600px;
	min-width: 332px;
    height: 54px;
    background: #FFFFFF;
    border-radius: 29px;
    box-shadow: 0px 4px 4px rgba(201, 201, 201, 0.25);
    overflow: hidden;
	top: 80px;
	margin: 0 auto;
	margin-bottom: 40px;
	z-index: 51;`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    &>button{
        border: none;
        background: transparent;
        font-size: 1.2rem;
        font-weight: 700;
        color: #838383;
        height: 100%;
        width: 100%;
        transition: all ease-in .2s;
        &:hover{
            background: #FA6241;
            color: #ffff;
        }
    }
    &>.linkActive{
        background: #FA6241;
        color: #ffff;
    }

`;
type ChildComponentProps = {
	productsRef: React.RefObject<HTMLDivElement>;
};

const NavCategories = ({productsRef}: ChildComponentProps) => {
	const state = useContext<AppContextInterface | undefined>(appContext);

	const handleScrollToProducts = () => {
		if (productsRef.current !== null) {
			productsRef.current.scrollIntoView({behavior: 'smooth'});
		}
	};

	const handleChangeCategory = (category: string) => {
		state?.setState({
			...state.state,
			category: {
				name: category,
			},
		});
		setTimeout(() => {
			handleScrollToProducts();
		}, 500);
	};

	return (
		<Container>
			<Wrapper>
				<button onClick={() => {
					handleChangeCategory('pizza');
				}} className={state?.state.category.name === 'pizza' ? 'linkActive' : ''}>
                        Pizza
				</button>
				<button className={state?.state.category.name === 'empanada' ? 'linkActive' : ''} onClick={() => {
					handleChangeCategory('empanada');
				}} >Empanadas</button>
				<button className={state?.state.category.name === 'bebida' ? 'linkActive' : ''} onClick={() => {
					handleChangeCategory('bebida');
				}} >Bebidas</button>
				<button className={state?.state.category.name === 'postre' ? 'linkActive' : ''} onClick={() => {
					handleChangeCategory('postre');
				}} >Postres</button>
			</Wrapper>
		</Container>
	);
};

export default NavCategories;
