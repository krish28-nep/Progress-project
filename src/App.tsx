import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { RootLayout } from './layout/RootLayout'
import { ContactUsPage } from './pages/ContactUsPage'
import { ServicesPage } from './pages/ServicesPage'
import { AboutPage } from './pages/AboutPage'
import { HelpPage } from './pages/HelpPage'

const App:React.FC = ()=>{
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/Contact" element={<ContactUsPage />}/>
        <Route path="/Services" element={<ServicesPage />}/>
        <Route path="/About" element={<AboutPage />}/>
        <Route path="/Help" element={<HelpPage />}/>
    </Route>
  ))


  return (
    <RouterProvider router ={router}/>
  )
}

export default App
