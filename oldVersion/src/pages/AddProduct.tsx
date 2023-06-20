import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {type Item} from '../type';
import firebaseApp from '../credentials';

import {getFirestore, collection, addDoc} from 'firebase/firestore';
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
	}
    `;
const ContainerTable = styled.div`
    border: 1px solid #d0d0d0;
    min-height: 400px;
    border-radius: 15px;
    padding: 20px 5px;
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
margin-top: 10px;
gap: 10px;
    &>button{
        width: 90px;
        height: 30px;
        border: none;
        font-size: 1.4rem;
        background: royalblue;
        color: #fff;
        border-radius:5px ;
		text-decoration: none;
		text-align: center;
    }
	&>a{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90px;
        height: 30px;
        border: none;
        font-size: 1.4rem;
        background: royalblue;
        color: #fff;
        border-radius:5px ;
		text-decoration: none;
		text-align: center;
	}
`;

const AddProduct = () => {
	const [form, setForm] = useState<Item | undefined>({
		name: '',
		description: '',
		price: '',
		category: '',
		img_url: '',
		id: '',
	});
	const navigate = useNavigate();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const {value} = e.target;

		if (form) {
			setForm({
				...form,
				[e.target.name]: value,
			});
		}
	};

	const handleSubmitData = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await addDoc(collection(db, 'products'), form);
			navigate('/dashboard/products');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Wrapper>
				<h3>Add new product</h3>
				<ContainerTable>
					<Form onSubmit={handleSubmitData}>

						<div>
							<label htmlFor=''>Name</label>
							<input required name='name' onChange={handleChange} defaultValue={form?.name} type='text' />
						</div>
						<div>
							<label htmlFor=''>Description</label>
							<textarea required name='description' onChange={handleChange} defaultValue={form?.description} />
						</div>
						<div>
							<label htmlFor=''>Price</label>
							<input required name='price' onChange={handleChange} defaultValue={form?.price} type='text' />
						</div>
						<div>
							<select required name='category' onChange={handleChange} defaultValue={form?.category}>
								<option value='' >Choose an category</option>
								<option value='pizza'>Pizza</option>
								<option value='empanada'>Empanada</option>
								<option value='bebida'>Bebidas</option>
								<option value='postre'>Postres</option>
							</select>
						</div>
						<div>
							<label htmlFor=''>Img url</label>
							<input required name='img_url' onChange={handleChange} defaultValue={form?.img_url} type='text' />
						</div>
						<BtnActions>
							<button type='submit'>Add</button>
							<Link to={'/dashboard/products'} >Cancel</Link >
						</BtnActions>
					</Form>
				</ContainerTable>

			</Wrapper>

		</Container>
	);
};

export default AddProduct;
