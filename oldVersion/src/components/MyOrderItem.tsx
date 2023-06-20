import styled from 'styled-components';
import React, {useContext} from 'react';
import closeBtn from '../assets/icons/close.svg';
import {type AppContextInterface, type Item, type ItemWithAmount} from '../type';
import AppContext from '../context/AppContext';
import CartItem from './CountItem';
import {amountCurrency} from '../utils/currencyConverter';

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    box-sizing: border-box;
    width: 100%;
    max-width: 320px;
    height: 113px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(211, 211, 211, 0.25);
    border-radius: 18px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 0 8px;
    gap: 5px;
    &>img{
        position: absolute;
        right: 5px;
        top: 5px;
        height: 10px;
        width: 10px;
    }
    
`;
const ContainerImg = styled.div`
    max-width: 102px;
    height: 77px;
    flex: 2;
    &>img{
        object-fit: cover;
        max-width: 100%!important;
        height: 100%!important;
    }
`;
const Description = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>h4{
        font-weight: 600;
        font-size: 1.4rem;
        color:#838383;
        text-align: center;
        width: 100px; /* Ancho máximo permitido */
  white-space: nowrap; /* Evita el salto de línea */
  overflow: hidden; /* Oculta el texto que desborda */
  text-overflow: ellipsis;
    }
    &>small{
        font-size: 1.2rem;
        color:#838383;
        font-weight: 600;
    }
`;
const ValueItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-weight: 600;
    color: #838383;
    padding:0 10px;
    
    `;
const Price = styled.p`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #838383;
    font-size: 1.4rem;

`;
type Props = {
	product: ItemWithAmount;
};
const MyOrderItem = ({product}: Props) => {
	const state = useContext<AppContextInterface | undefined>(AppContext);

	const handleRemoveItemCart = (product: ItemWithAmount) => {
		state?.removeFromCart(product);
	};

	return (
		<Container>
			<ContainerImg>
				<img
					alt={product.name} width={640}
					height={480} src={product.img_url}></img>
			</ContainerImg>
			<Description>
				<h4>{product.name}</h4>
				<small>4.5</small>
			</Description>
			<ValueItems>
				<CartItem product={product} />
			</ValueItems>
			<Price>
				{amountCurrency(product.price)}
			</Price>
			<img onClick={() => {
				handleRemoveItemCart(product);
			}} alt='' src={closeBtn}></img>
		</Container>
	);
};

export default MyOrderItem;
