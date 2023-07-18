// react imports
import { Route, Router, Routes, useRoutes } from "react-router-dom"
import { useState } from "react"



// component imports
import {  Navbar, Home, Socials, Projects, BadPath } from "./components"


function App() {
 

    return (
  <>

 <Navbar />
 
<Routes >
  <Route path="" element={<Home />} />
  <Route path="socials" element={<Socials />} />
  <Route path="projects" element={<Projects />} />
  <Route path="*" element={<BadPath />} />
</Routes>
 

  </>
 )
}

export default App
