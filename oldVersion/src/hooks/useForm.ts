import {type FormValuesLogin, type ErrorsForm, type FormValuesOrder, type UseFormProps, type UseFormReturn, type ItemWithAmount} from '../type';
import {useState} from 'react';
import firebaseApp from '../credentials';

import {getFirestore, collection, addDoc} from 'firebase/firestore';
import Swal from 'sweetalert2';
import {useParams} from 'react-router-dom';
const db = getFirestore(firebaseApp);

const useForm = ({initialForm, validateForm}: UseFormProps): UseFormReturn => {
	const [form, setForm] = useState< FormValuesOrder >(initialForm);
	const [errors, setErrors] = useState<ErrorsForm>({});
	const [loading, setLoading] = useState<boolean>(false);
	const [response, setResponse] = useState<boolean | undefined>(undefined);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		const {name, value} = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		handleChange(e);
		setErrors(validateForm(form));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		setErrors(validateForm(form));

		try {
			if (Object.keys(errors).length === 0) {
				const newOrder = {
					...form,
					orderCompleted: false,
					date: new Date().toLocaleDateString(),
					hour: new Date().toLocaleTimeString(),
				};
				// Console.log(useOrders());
				setLoading(true);

				await addDoc(collection(db, 'orders'), newOrder);
				setResponse(true);
				Swal.fire({
					icon: 'success',
					title: '¡Pedido realizado con éxito!',
				}).then((res: any) => {
					setForm(initialForm);
					setResponse(false);
				});
				setLoading(false);
			}
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Ocurrio un error',
			}).then((res: any) => {
				setResponse(false);
			});
			setLoading(false);

			console.log(error);
		}
	};

	return {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};

export {useForm};
