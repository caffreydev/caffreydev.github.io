// react imports
import { Route, Router, Routes, useRoutes } from "react-router-dom"
import { useState } from "react"



// component imports
import {  Navbar, Home, Socials } from "./components"


function App() {
 

    return (
  <>

 <Navbar />
 
<Routes >
  <Route path="" element={<Home />} />
  <Route path="socials" element={<Socials />} />
</Routes>
 

  </>
 )
}

export default App
