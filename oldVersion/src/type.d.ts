export type Item = {
	id: string;
	name: string;
	description: string;
	price: string;
	img_url: string;
	category: string;
};

export type User = {
	email: any;
	token: any;
	isLogged: boolean;
};

type ItemWithAmount = {
	amount: number;
} & Item;
type Category = {
	name: string;
};

export type State = {
	cart: ItemWithAmount[];
	products: Item[];
	orderIsOpen: boolean;
	menuIsOpen: boolean;
	category: Category;
	user: User;
};

export type AppContextInterface = {
	state: State;
	addToCart: (item: ItemWithAmount) => void;
	removeFromCart: (item: ItemWithAmount) => void;
	toggleOrder: () => void;
	toggleMenu: () => void;
	setState: (newState: State) => void;
	getProducts: (item: Item[]) => void;
	removeAllFromCart: () => void;
	changeAmount: (payload: ItemWithAmount, action: string) => void;
	initialCart: (item: ItemWithAmount[]) => void;

};

export type FormValuesLogin = {
	username: string;
	password: string;
	confirmPassword: string;
};
export type FormValuesOrder = {
	name: string;
	street: string;
	phone: string;
	comment?: string;

};

export type OrdersItem = {
	id: string;
	name: string;
	date: string;
	hour: string;
	orderCompleted: boolean;
	phone: number;
	street: string;
	product: ItemWithAmount[];
};

export type ErrorsForm = Record<string, string>;

export type UseFormProps = {
	initialForm: FormValuesOrder;
	validateForm: (values: FormValuesOrder) => ErrorsForm;
};
export type UseFormReturn = {
	form: FormValuesOrder;
	errors: ErrorsForm;
	loading: boolean;
	response: boolean | undefined;
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	handleBlur: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;

};
