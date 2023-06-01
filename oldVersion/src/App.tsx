import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import useInitialState from './hooks/useInitialState';
import AppContext from './context/AppContext';

function App() {
	const initialState = useInitialState();

	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<AppRoutes />

			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
