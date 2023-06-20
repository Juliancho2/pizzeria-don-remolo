import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import arrowLeft from '../assets/icons/arrow-left.svg';
import trash from '../assets/icons/trash.png';
import MyOrderItem from '../components/MyOrderItem';
import {Item, type AppContextInterface, type ItemWithAmount} from '../type';
import AppContext from '../context/AppContext';
import FormOrder from '../components/FormOrder';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import {amountCurrency} from '../utils/currencyConverter';

const Container = styled.div`
  &>a{
    display: inline-block;
    margin: 10px;
  }
  `;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 800px;
  box-sizing: border-box;

  &>p{
    font-size: 1.2rem;
    color: #FA6241;
    margin-top: 20px;
  }
  &>h5{
    font-size: 1.6rem;
    color: #FA6241;
    margin-top: 20px;

  }
  `;
const ContainerHead = styled.div`
display: grid;
gap: 10px;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
justify-content: center;
margin-top: 30px;
&>h2{
  font-size: 3rem;
  margin: 0;
  display: flex;
  align-items: center;
}
&>p{
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.4rem;
}
&>small{
  display: flex;
  align-items: center;
  font-size: 1.4rem;
}
&>div{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
  `;
const ContainerValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
 &>button{
  
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
 }
`;

const Checkout = () => {
	const state = useContext<AppContextInterface | undefined>(AppContext);
	const [openFormOrder, setOpenFormOrder] = useState(false);

	const handleRemoveAllItems = (e: React.MouseEvent<HTMLImageElement>) => {
		if (state?.state.cart.length === 0) {
			e.preventDefault();
			return;
		}

		Swal.fire({
			title: 'Are you sure?',
			text: 'You won\'t be able to revert this!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result: any) => {
			if (result.isConfirmed) {
				state?.removeAllFromCart();
				Swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success',
				);
			}
		});
	};

	const handleFormOrder = () => {
		setOpenFormOrder(!openFormOrder);
	};

	const amounTotal: number = state ? state.state.cart.reduce((acc: number, item: ItemWithAmount) => Number(acc) + (Number(item.price) * Number(item.amount)), Number(0)) : 0;

	return (
		<Container>
			<Link to={'/'}>
				<img src={arrowLeft} alt='' />
			</Link>
			<Wrapper>
				{
					openFormOrder && <FormOrder setOpenOrden={setOpenFormOrder} openOrder={openFormOrder} />
				}
				<ContainerHead>
					<h2>Mis productos</h2>
					<p>Eliminar todos los productos</p>
					<small>{state?.state.cart.length} Items</small>
					<div >
						<img onClick={handleRemoveAllItems} alt='' src={trash} />
					</div>

				</ContainerHead>

				<div>
					{
						state?.state.cart.length === 0 ? <h2>No hay productos</h2>
							: state?.state.cart.map(product => (<MyOrderItem key={product.id} product={product} />))
					}
				</div>
				{
					state?.state && state.state.cart.length > 0 && <ContainerValue>
						<div>
							<h5>Total:</h5><p>{amountCurrency(amounTotal)}</p>
						</div>
						<button onClick={handleFormOrder}>
              Ordenar
						</button>
					</ContainerValue>
				}
				<h5>¡Atencion!</h5>
				<p>
          El pago se realizará únicamente en efectivo al momento de la entrega. Una vez que hayas concretado tu pedido, recibirás los detalles de contacto a través de WhatsApp. <br></br><br></br>
        ¡Gracias por tu preferencia! Nuestro equipo se encargará de preparar tu pedido y realizará el cobro al momento de la entrega
				</p>
			</Wrapper>
		</Container>
	);
};

export default Checkout;
