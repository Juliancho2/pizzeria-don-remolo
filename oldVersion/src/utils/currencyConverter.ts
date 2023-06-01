const currencyFormatter = new Intl.NumberFormat('es-CO', {
	style: 'currency',
	currency: 'COP',
});

export const amountCurrency = (number: number | string) => currencyFormatter.format(Number(number));
