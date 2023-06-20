import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {type OrdersItem, type AppContextInterface, type Item} from '../../type';
import appContext from '../../context/AppContext';
import editIcon from '../../assets/icons/edit.png';
import trashIcon from '../../assets/icons/trashIcon.png';
import {Link} from 'react-router-dom';

import firebaseApp from '../../credentials';
import {getFirestore, doc, deleteDoc} from 'firebase/firestore';
import Swal from 'sweetalert2';
import {getOrders} from '../../services/getOrders';

const db = getFirestore(firebaseApp);
const Container = styled.div`
	display: flex;
	align-items: center;
	min-height: 100vh;
`;
const Wrapper = styled.div`
	width: 70%;
	margin: 0 auto;
	padding: 60px;
	max-width: 1200px;
	&>a{

		display: flex;
		align-items: center;
		text-decoration: none;
		justify-content: center;
		background: royalblue;
		width: 110px;
		height: 40px;
		border: none;
		border-radius: 5px;
		color: #fff;
		font-size: 1.4rem;
		font-weight: bold;
	}
`;

const TableContainer = styled.table`
  width: 100%;
  margin: 50px auto;
  font-size: 2rem;
  border: 1px solid #b8b7b790;
  border-radius:5px;

`;

const TableHeader = styled.thead`
  background-color: #f4f4f476;
`;

const TableHeaderRow = styled.tr``;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableBody = styled.tbody`
	border-radius:5px;
`;

const TableBodyRow = styled.tr`


`;

const TableBodyCell = styled.td`
  padding: 10px;
  text-align: left;
  font-size: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TableOrders = () => {
	const state = useContext<AppContextInterface | undefined>(appContext);
	const [orders, setOrders] = useState<OrdersItem[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const todos = await getOrders();
				setOrders(todos);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	return (
		<Container>
			<Wrapper>
				<TableContainer>
					<TableHeader>
						<TableHeaderRow>
							<TableHeaderCell>ID</TableHeaderCell>
							<TableHeaderCell>Name user</TableHeaderCell>
							<TableHeaderCell>Date</TableHeaderCell>
							<TableHeaderCell>Hour</TableHeaderCell>
							<TableHeaderCell>Phone</TableHeaderCell>
							<TableHeaderCell>Address</TableHeaderCell>
							<TableHeaderCell>Actions</TableHeaderCell>
						</TableHeaderRow>
					</TableHeader>
					<TableBody>
						{orders?.map((item: OrdersItem) => (
							<TableBodyRow key={item.id}>
								<TableBodyCell>{item.id}</TableBodyCell>
								<TableBodyCell>{item.name}</TableBodyCell>
								<TableBodyCell>{item.date}</TableBodyCell>
								{/* <TableBodyCell>
									<img src={item.hour} width={80} alt='' />
								</TableBodyCell> */}
								<TableBodyCell>{item.hour}</TableBodyCell>
								<TableBodyCell>{item.phone}</TableBodyCell>
								<TableBodyCell>{item.street}</TableBodyCell>
								<TableBodyCell>
									<ButtonContainer>
										<input type='checkbox' />
										<Link to={'#'} >
											<img src={trashIcon} width={25} alt='' />
										</Link>

									</ButtonContainer>
								</TableBodyCell>
							</TableBodyRow>
						))}
					</TableBody>
				</TableContainer>
			</Wrapper>
		</Container>
	);
};

export default TableOrders;
