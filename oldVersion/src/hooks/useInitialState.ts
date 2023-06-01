import {type Item, type ItemWithAmount, type State} from '../type';
import {useState} from 'react';

const initialState: State = {
	cart: [],
	orderIsOpen: false,
	menuIsOpen: false,
	category: {
		name: 'pizza',
	},
	products: [],
	user: {
		email: '',
		token: '',
		isLogged: false,
	},
};

const useInitialState = () => {
	const [state, setState] = useState<State>(initialState);

	const getProducts = (payload: Item[]) => {
		setState({
			...state,
			products: payload,
		});
	};

	const changeAmount = (payload: ItemWithAmount, action: string) => {
		const item: ItemWithAmount | undefined = state.cart.find(item => item.id === payload.id);
		const operator = 'increment';
		if (item) {
			if (action === operator) {
				setState({
					...state,
					cart: state.cart.map(product =>
						product.id === item.id ? {...item, amount: item.amount + 1} : product,
					),
				});
			} else {
				setState({
					...state,
					cart: state.cart.map(product =>
						product.id === item.id ? {...item, amount: item.amount - 1} : product,
					),
				});
			}
		}

		localStorage.setItem('cart', JSON.stringify(state.cart.concat(payload)));
	};

	const addToCart = (payload: ItemWithAmount) => {
		const itemExists = state.cart.find(item => item.id === payload.id);
		if (!itemExists) {
			localStorage.setItem('cart', JSON.stringify([...state.cart, payload]));
		}

		setState({
			...state,
			cart: itemExists
				? state.cart
				: [...state.cart, payload],
		});
	};

	const removeFromCart = (payload: ItemWithAmount) => {
		const newArr = state.cart.filter(items => items.id !== payload.id);
		setState({
			...state,
			cart: newArr,
		});
		localStorage.setItem('cart', JSON.stringify(newArr));
	};

	const removeAllFromCart = () => {
		setState({
			...state,
			cart: initialState.cart,
		});
		localStorage.removeItem('cart');
	};

	const toggleOrder = () => {
		setState({
			...state,
			orderIsOpen: !state.orderIsOpen,
		});
	};

	const toggleMenu = () => {
		setState({
			...state,
			menuIsOpen: !state.menuIsOpen,
		});
	};

	const initialCart = (payload: ItemWithAmount[]) => {
		setState({
			...state,
			cart: payload,
		});
	};

	return {
		state,
		addToCart,
		toggleOrder,
		toggleMenu,
		setState,
		getProducts,
		removeFromCart,
		removeAllFromCart,
		changeAmount,
		initialCart,
	};
};

export default useInitialState;
