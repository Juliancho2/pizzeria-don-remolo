
import {type Item} from '../type';
import firebaseApp from '../credentials';
import {collection, getDocs, getFirestore} from 'firebase/firestore';

const db = getFirestore(firebaseApp);

export const getAllTodos = async (): Promise<Item[]> => {
	const todosRef = collection(db, 'products');
	const todosSnapshot = await getDocs(todosRef);
	const todos: Item[] = todosSnapshot.docs.map(doc => ({
		id: doc.id,
		name: doc.data().name,
		description: doc.data().description,
		price: doc.data().price,
		img_url: doc.data().img_url,
		category: doc.data().category,
	}));
	return todos;
};
