import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Register from './components/register/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>  
		<Routes>
			<Route path="/register" element={<Register parent_text='Регистрация' children_text='Аккаунта' />}/>
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
)