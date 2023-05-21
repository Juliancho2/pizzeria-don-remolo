import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ProductItem from './ProductItem';
import cartIcon from '../assets/icons/cart.svg';
import MyOrders from './MyOrders';
import { useContext } from 'react';
import Loader from './Loader';
import { type Item, type AppContextInterface } from '../type';
import AppContext from '../context/AppContext';
import { getAllTodos } from '../services/getDocs';

const addItem = keyframes`
  0% {
    transform: translateY(100%);
    animation-timing-function: ease-in;
  }
  25% {
    transform: translateY(-10px);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translateY(10px);
    animation-timing-function: ease-in;
  }
  75% {
    transform: translateY(-5px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 80px;
  & > h3 {
    display: flex;
    gap: 3px;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    justify-content: flex-start;
    color: #424242;
    font-size: 3.6rem;
  }
  & > hr {
    border-color: #b6b6b627;
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
  }
  & > div {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(280px, 290px));
    gap: 55px;
    padding: 5px;
    margin: 50px;
  }
`;

const ContainerCart = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    background: #5ea135;
    border-radius: 50%;
    position: absolute;
    color: #ffff;
    font-weight: 400;
    font-size: 1.4rem;
    top: 0;
    right: 0;
    animation: ${addItem} ease 1s;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.6s;
  }
`;

type ChildComponentProps = {
  productsRef: React.RefObject<HTMLDivElement>;
  bannerRef: React.RefObject<HTMLDivElement>;
};

const AllCategoryes = ({ productsRef }: ChildComponentProps) => {
  const state = useContext<AppContextInterface | undefined>(AppContext);
  const [error, setError] = useState({
    message: '',
    isError: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const categories = await getAllTodos();
        state?.getProducts(categories);
      } catch (err) {
        setError({
          message: 'Ocurrió un error al cargar los productos',
          isError: true,
        });
      }
    })();
  }, []);

  const handleModalOrder = () => {
    state?.toggleOrder();
  };

  return (
    <>
      <Container ref={productsRef}>

        <h3>Todas las categorías</h3>

        <hr />

        <div>
          {state?.state.products.length === 0 && !error.isError && <Loader />}

          {state?.state.products.length === 0 && error.isError && (
            <h2>Ocurrió un error</h2>
          )}

          {state && state.state.products.length > 0 && state.state.products.map((product: Item) => (
              <ProductItem key={product.id} products={product}></ProductItem>
            ))}

          <ContainerCart>
            {state && state.state.cart.length > 0 && (<span>{state.state.cart.length}</span>)}

            <img onClick={handleModalOrder} src={cartIcon} alt='' />
          </ContainerCart>

        </div>

      </Container>
      {state?.state && state?.state.orderIsOpen && <MyOrders />}
    </>
  );
};

export default AllCategoryes;