import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {type AppContextInterface} from '../type';
import appContext from '../context/AppContext';
import {type Item} from '../type';
import {getAllTodos} from '../services/getDocs';
import {Link} from 'react-router-dom';
import firebaseApp from '../credentials';

import {getFirestore, collection, addDoc, getDoc, doc, deleteDoc, setDoc, getDocs} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    min-width: 500px;
    max-width: 600px;
    background: #fff;
    max-height: 800px;
    min-height: 500px;
	&>h3{
		text-align: center;
		font-size: 2rem;
		margin-bottom: 10px;
		display: inline-block;
		&>i{
			font-size: 1.6rem;
		}
	}
    `;
const ContainerTable = styled.div`
    border: 1px solid #d0d0d0;
    min-height: 400px;
    border-radius: 15px;
    padding: 30px 10px;
`;
const Form = styled.form`
    width: 60%;
    margin: 0 auto;
    padding: 0;
    gap: 5px;
    &>div{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
        &>label{
            font-size: 1.6rem;
            margin: 5px 0;
        }
        &>input,select{
            height: 40px;
            border: none;
            outline: none;
            font-size: 1.4rem;
            border-radius:5px;
            border: 1px solid #d0d0d0;
            padding: 5px;
        }
		&>select  option{
			background: #f6f6f695;
			font-size: 1.4rem;
			height: 40px;
			border: none;
		}
        &>textarea{
            width: 100%;
            resize: none;
            outline:none ;
            height: 60px;
            border-radius:5px;
            border: 1px solid #d0d0d0;
            padding: 5px;
        }
    }
`;
const BtnActions = styled.section`
display: flex;
margin: 15px 0;
gap: 10px;
    &>button,&>a{
        width: 90px;
        height: 30px;
        border: none;
        font-size: 1.4rem;
        background: royalblue;
        color: #fff;
        border-radius:5px ;
		cursor: pointer;
    }
	&>a{
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		cursor: pointer;
	}
`;

const EditProduct = () => {
	const state = useContext<AppContextInterface | undefined>(appContext);
	const params = useParams();
	const [productEdit, setProductEdit] = useState<Item | undefined>(undefined);
	const navigate = useNavigate();
	const [form, setForm] = useState<Item | undefined>({
		name: '',
		description: '',
		price: '',
		category: '',
		img_url: '',
		id: '',
	});

	useEffect(() => {
		(async () => {
			try {
				const todos = await getAllTodos();
				const filterProduct = todos.find(product => product.id === params.id);
				if (filterProduct) {
					setForm({
						name: filterProduct?.name,
						description: filterProduct?.description,
						price: filterProduct?.price,
						category: filterProduct?.category,
						img_url: filterProduct?.img_url,
						id: filterProduct?.id,

					});
				}

				setProductEdit(filterProduct);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const {value} = e.target;

		if (form) {
			setForm({
				...form,
				[e.target.name]: value,
			});
		}
	};

	const handleUpdateDoc = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (productEdit) {
				const {id} = productEdit;
				await setDoc(doc(db, 'products', id), form);
				navigate('/dashboard/products');
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<Wrapper>
				<h3>Edit product: <i> {productEdit?.id}</i></h3>
				{productEdit
                    && (
                    	<ContainerTable>
                    		<Form onSubmit={handleUpdateDoc}>
                    			<div>
                    				<label htmlFor=''>Name</label>
                    				<input onChange={handleChange} defaultValue={form?.name} name='name' type='text' />
                    			</div>
                    			<div>
                    				<label htmlFor=''>Description</label>
                    				<textarea onChange={handleChange} name='description' defaultValue={form?.description} />
                    			</div>
                    			<div>
                    				<label htmlFor=''>Price</label>
                    				<input onChange={handleChange} name='price' defaultValue={form?.price} type='text' />
                    			</div>
                    			<div>
                    				<select onChange={handleChange} name='category' defaultValue={form?.category}>
                    					<option value='' selected>Choose an category</option>
                    					<option value='pizza'>Pizza</option>
                    					<option value='empanada'>Empanada</option>
                    					<option value='bebida'>Bebidas</option>
                    					<option value='postre'>Postres</option>
                    				</select>
                    			</div>
                    			<div>
                    				<label htmlFor=''>Img url</label>
                    				<input onChange={handleChange} name='img_url' defaultValue={form?.img_url} type='text' />
                    			</div>
                    			<BtnActions>
                    				<button type='submit'>Edit</button>
                    				<Link to={'/dashboard/products'} >Cancel</Link >
                    			</BtnActions>
                    		</Form>
                    	</ContainerTable>
                    )
				}

			</Wrapper>

		</Container>
	);
};

export default EditProduct;
