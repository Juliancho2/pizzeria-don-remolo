import React, {useContext} from 'react';
import styled, {keyframes} from 'styled-components';
import shoopingCart from '../assets/icons/shoopingCart.png';
import {type AppContextInterface, type Item, ItemWithAmount} from '../type';
import AppContext from '../context/AppContext';
import './productItem.css';
import {amountCurrency} from '../utils/currencyConverter';
const load = keyframes`
	to{
		transform: scale(1);
		opacity: 1;
	}
	from{
		transform: scale(0);
		opacity: 0;
	}
`;
const Container = styled.div`
    min-height: 258px;
    box-sizing: border-box;
	animation: ${load} .8s alternate;
    `;

type Props = {
	products: Item;
};

const ProductItem = ({products}: Props) => {
	const state = useContext<AppContextInterface | undefined>(AppContext);

	const handleAddCart = (product: Item) => {
		const itemAddedToCart = {...product, amount: 1};

		state?.addToCart(itemAddedToCart);
	};

	return (
		<Container>
			<div className='small'>
				<article className='recipe'>
					<div className='pizza-box'>
						<img src={products.img_url} width='1500' height='1368' alt='' />
					</div>
					<div className='recipe-content'>
						<p className='recipe-tags'>
							<span className='recipe-tag'>{products.category}</span>
						</p>

						<h1 className='recipe-title'><a href='#'>{products.name}</a></h1>

						<p className='recipe-metadata'>
							<span className='recipe-rating'>★★★★<span>☆</span></span>
							<span className='recipe-votes'>(12 votes)</span>
						</p>

						<p className='recipe-desc'>{products.description}</p>

						<div className='container-btn'>
							<button className='recipe-price' type='button' >
								{amountCurrency(products.price)}

							</button>
							<button className='recipe-save' type='button' onClick={() => {
								handleAddCart(products);
							}}>
								<img src={shoopingCart} width={24} alt='' />

							</button>
						</div>

					</div>
				</article>
			</div>

		</Container>
	);
};

export default ProductItem;
