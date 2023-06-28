import { collection, getDocs, getFirestore } from 'firebase/firestore'

import { type Item } from '../type'
import firebaseApp from '../credentials'

const db = getFirestore(firebaseApp)

export const getOrders = async (): Promise<any[]> => {
  const todosRef = collection(db, 'orders')
  const todosSnapshot = await getDocs(todosRef)
  const todos = todosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  return todos
}
