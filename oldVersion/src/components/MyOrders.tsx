import React, {useContext} from 'react';
import MyOrderItem from './MyOrderItem';
import arrowDown from '../assets/icons/arrowdown.svg';
import AppContext from '../context/AppContext';
import styled, {keyframes} from 'styled-components';
import {type ItemWithAmount, type AppContextInterface} from '../type';
import {Link} from 'react-router-dom';
import {amountCurrency} from '../utils/currencyConverter';

const spin = keyframes`
  to{
    animation-timing-function: ease-in;
    transform: translateY(0px);
    }
    from{
    animation-timing-function: ease-out;
    transform: translateY(1000px);
    }
`;

const Container = styled.div`
display:flex;
position: fixed;
left:0;
right: 0;
bottom: 0;
z-index: 10;
height: 466px;
animation: ${spin} ease .5s;
max-width:400px;
min-width:340px;
margin:0 auto;
z-index: 60;
padding: 20px 15px;

@media (min-width:700px ) {
    left: initial;
        right: 5px;
        margin: 0;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    overflow-y: overlay;
    /* padding-right:10px; */
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: #FFFFFF;
    box-sizing: content-box;
    box-shadow: 0px 0px 4px rgba(99, 99, 99, 0.25);
    border-radius: 29px 29px 0px 0px;
    padding: 20px 15px;
    margin:0 auto;
    padding-top: 30px;
    
    &>img{
        background: red;
        top: 5px;
        left: 50%;
        transform: translate(-50%);
        z-index:5;
    }
    &>h2{
        text-align:center;
        color:#656565;
        margin-top:30px;
        font-size:2rem;
    }
    `;
const WrapperArrow = styled.div`
    position: sticky;
    top: 0;
    text-align: center;
    width: 100%;
    z-index: 20;
    left: 0;
`;
const ContainerValue = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
   &>div{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    justify-content: space-between;
    background: #F6F6F6;
    border-radius: 5px;
    height: 50px;
    padding: 0px 15px;
    &>h5{
        display: flex;
        align-items: center;
        color: #656565;
        font-size: 1.6rem;
        font-weight: 600;
        margin: 0;
    }
    &>p{
        display: flex;
        align-items: center;
        color: #656565;
        font-size: 1.6rem;
        font-weight: 600;
    }
   }
   &>a{
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background: #FA6241;
        box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.21);
        border-radius: 18px;
        height: 52px;
        width: 115px;
        color: #ffff;
        font-weight: 600;
        font-size: 1.2rem;
        margin-top: 20px;
        text-decoration: none;
      
   }
`;
const MyOrders = () => {
	const state = useContext<AppContextInterface | undefined>(AppContext);
	const handleModalOrder = () => {
		state?.toggleOrder();
	};

	const amountTotal: number = state?.state ? state.state.cart.reduce((acc: number, item: ItemWithAmount) => acc + (Number(item.price) * Number(item.amount)), Number(0)) : 0;

	return (
		<Container >
			<Wrapper>
				<WrapperArrow>
					<img onClick={handleModalOrder} height={30} width={30} src={arrowDown} alt=''></img>
				</WrapperArrow>
				{
					(state && state.state.cart.length === 0) ? <h2>Add products</h2>
						: <>
							<div>
								{
									state?.state.cart.map(product => (<MyOrderItem key={product.id} product={product} />))
								}

							</div>

							<ContainerValue>
								<div>
									<h5>Total:</h5><p>{amountCurrency(amountTotal)}</p>
								</div>
								<Link to={'/checkout'}>Mis productos</Link>
							</ContainerValue>

						</>
				}
			</Wrapper>

		</Container>

	);
};

export default MyOrders;
