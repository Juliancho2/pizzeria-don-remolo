import React, {useContext} from 'react';
import styled from 'styled-components';
import {type AppContextInterface, type Item} from '../../type';
import appContext from '../../context/AppContext';
import editIcon from '../../assets/icons/edit.png';
import trashIcon from '../../assets/icons/trashIcon.png';
import {Link} from 'react-router-dom';

import firebaseApp from '../../credentials';
import {getFirestore, doc, deleteDoc} from 'firebase/firestore';
import Swal from 'sweetalert2';

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

const EditButton = styled.button`
  margin-right: 10px;
`;

const DeleteButton = styled.button``;

const Table = () => {
	const state = useContext<AppContextInterface | undefined>(appContext);

	const handleDeleteDoc = async (id: string) => {
		try {
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
					deleteDoc(doc(db, 'products', id)).then((res: any) => {
						state?.setState({
							...state.state,
							products: state.state.products.filter(product => product.id !== id),
						});
						Swal.fire(
							'Deleted!',
							'Your file has been deleted.',
							'success',
						);
					});
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Wrapper>
				<Link to={'add'} >Add</Link >
				<TableContainer>
					<TableHeader>
						<TableHeaderRow>
							<TableHeaderCell>ID</TableHeaderCell>
							<TableHeaderCell>Description</TableHeaderCell>
							<TableHeaderCell>Category</TableHeaderCell>
							<TableHeaderCell>Image URL</TableHeaderCell>
							<TableHeaderCell>Price</TableHeaderCell>
							<TableHeaderCell>Name</TableHeaderCell>
							<TableHeaderCell>Actions</TableHeaderCell>
						</TableHeaderRow>
					</TableHeader>
					<TableBody>
						{state?.state.products.map(item => (
							<TableBodyRow key={item.id}>
								<TableBodyCell>{item.id}</TableBodyCell>
								<TableBodyCell>{item.description}</TableBodyCell>
								<TableBodyCell>{item.category}</TableBodyCell>
								<TableBodyCell>
									<img src={item.img_url} width={80} alt='' />
								</TableBodyCell>
								<TableBodyCell>{item.price}</TableBodyCell>
								<TableBodyCell>{item.name}</TableBodyCell>
								<TableBodyCell>
									<ButtonContainer>
										<Link to={`edit/${item.id}`}>
											<img src={editIcon} width={25} alt='' />
										</Link>

										<Link to={'#'} onClick={async () => handleDeleteDoc(item.id)}>
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

export default Table;
