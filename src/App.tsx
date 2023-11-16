import { Component, ReactNode, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Admin from './admin/Admin'
import Home from './components/Home'


const App:React.FC = () => (
  <BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/admin" element={<Admin />} />
		</Routes>
	</BrowserRouter>
)

export default App
