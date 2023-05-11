import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import {type AppContextInterface, type ItemWithAmount} from '../type';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:30px;
    width:100%;
    height:100%;
    border-radius:3px;
    overflow:hidden;

    &>small{
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:1.4rem;
        height:25px;
        width:25px;
        margin:2px 0;
        border:1px #a6a6a6 solid;
    border-radius:3px;

    }
    &>button{
        
        border:none;
        background: #787878;
        color:#ffff;
        font-size:2rem;
        height:25px;
        width:25px;
        border-radius:3px;
        
    }

`;
type Props = {
	product: ItemWithAmount;
};
const CartItem = ({product}: Props) => {
	const state = useContext<AppContextInterface | undefined>(AppContext);

	const increaseQuantity = () => {
		if (product.amount < 5) {
			state?.changeAmount(product, 'increment');
		}
	};

	const decreaseQuantity = () => {
		if (product.amount > 1) {
			state?.changeAmount(product, 'decrement');
		}
	};

	return (
		<Container>
			<button onClick={decreaseQuantity}>-</button>
			<small>{product.amount}</small>
			<button onClick={increaseQuantity}>+</button>
		</Container>
	);
};

export default CartItem;
