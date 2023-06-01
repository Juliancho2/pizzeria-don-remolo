import {useForm} from '../hooks/useForm';
import {type UseFormReturn, type ErrorsForm, type FormValuesOrder} from '../type';
import React, {useEffect, type Dispatch, type SetStateAction} from 'react';
import styled, {keyframes} from 'styled-components';
import Loader from './Loader';

const modalEnterAnimation = keyframes`
  from {
    opacity: 0;
    transform:  scale(0.8);
  }
  to {
    opacity: 1;
    transform:  scale(1);
  }
`;

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    background:#2a292933;
    min-height:100vh;
    width:100vw;
    left:0;
    top:0;
    z-index:20;
    overflow-x:hidden;
    `;
const Wrapper = styled.div`
    background:#fff;
    margin:0 10px;
    padding:15px 20px;
    width:400px;
    min-width:310px;
    animation: ${modalEnterAnimation} ease .7s; 
`;
const Form = styled.form`
    &>div{
        display:flex;
        flex-direction:column;
        margin-bottom:10px;
        &>input, textarea{
            border: 1px solid #DFDFDF;
            border-radius: 10px;
            height: 40px;
            outline: none;
            padding: 0;
            min-width:240px;
            padding:5px 10px;
            resize:none;
        }
        &>h6{
            margin:5px 0;
            font-size:1.2rem;
            font-weight:400;
            color:#e88181;
        }
        &>label{
            color:#777070;
          font-size:1.4rem;
          margin-bottom: 5px;
          font-weight: 500;
        }
    }
`;
const ContainerActions = styled.article`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:100%;
    gap:15px;
    min-height:40px;
    box-sizing:border-box;
    margin:10px 0 0 0;
    &>button{
        display:inline;
        width: 80px;
        height: 35px;
        color: #ffff;
        background: #FA6241;

        border-radius: 8px;
        border: none;
        font-weight: 600;
        box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.21);

        transition:  all ease .7s;
        cursor: pointer;
        &:hover{
          opacity:.7 ;
        }
        }
    &>button:first-child{
        background: transparent;
        border:1px #FA6241 solid;
        color:#3d3d3d;

    }

`;
type Props = {
	setOpenOrden: Dispatch<SetStateAction<boolean>>;
	openOrder: boolean;

};
const initialForm: FormValuesOrder = {
	name: '',
	street: '',
	phone: '',
	comment: '',
};
const validateForm = (form: FormValuesOrder): ErrorsForm => {
	const errors: ErrorsForm = {};
	const name = /^[A-Za-z\s]+$/;
	const phone = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;

	if (!form.name.trim()) {
		errors.name = 'Este campo es requerido';
	} else if (!name.test(form.name.trim())) {
		errors.name = 'Nombre es invalido';
	}

	if (!form.phone) {
		errors.phone = 'Este campo es requerido';
	} else if (!phone.test(form.phone.trim())) {
		errors.phone = 'Numero celular es invalido';
	}

	if (form.comment) {
		if (form.comment.length > 100) {
			errors.comment = 'Sobrepaso el limite de 100 caracteres';
		}
	}

	return errors;
};

const FormOrder = ({openOrder, setOpenOrden}: Props) => {
	const {
		form,
		errors,
		loading,
		handleChange,
		handleBlur,
		handleSubmit,
		response,
	} = useForm({initialForm, validateForm});

	useEffect(() => {
		if (response) {
			setOpenOrden(false);
		}
	}, [response]);
	return (
		<Container>
			<Wrapper>
				<Form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='name'>Nombre*</label>
						<input value={form.name} onChange={handleChange} onBlur={handleBlur} required name='name' type='text' />
						{errors.name && <h6>{errors.name}</h6>}
					</div>
					<div>
						<label htmlFor='street'>Direccion*</label>
						<input value={form.street} onChange={handleChange} onBlur={handleBlur} required name='street' type='text' />
						{errors.street && <h6>{errors.street}</h6>}
					</div>

					<div>
						<label htmlFor='phone'>Celular*</label>
						<input value={form.phone} onChange={handleChange} onBlur={handleBlur} required name='phone' type='number' />
						{errors.phone && <h6>{errors.phone}</h6>}
					</div>
					<div>
						<label htmlFor='comment'>Comentario adicional (opcional)</label>
						<textarea value={form.comment} onChange={handleChange} onBlur={handleBlur} name='comment'></textarea>
						{errors.comment && <h6>{errors.comment}</h6>}
					</div>
					{
						loading && <Loader/>
					}
					<ContainerActions>
						<button type='button' onClick={() => {
							setOpenOrden(!openOrder);
						}}>Cancelar</button>
						<button >Confirmar</button>
					</ContainerActions>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default FormOrder;
