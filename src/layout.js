import React from 'react'
import { Bloglist } from './bloglist'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Header } from './header'
import { Login } from './login'
import { Signup } from './Signup'
import Blogsite from './Blogsite'
import "./layout.css"

export function Layout(){
    return(
        <BrowserRouter>
        <header>
        <Header/>
        </header>
        <article className="main1">
        <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/list' element={<Bloglist/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        {/* <Route exact path='/blog/:id' element={<Blogsite/>}/> */}
        {/* <Route exact path='/blogsite' element={<Blogsite/>}/> */}
        </Routes>
         </article>
         </BrowserRouter>
    
    )
}