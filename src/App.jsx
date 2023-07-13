// react imports
import { Route, Router, Routes, useRoutes } from "react-router-dom"
import { useState } from "react"



// component imports
import { Header, Navbar, Home } from "./components"







function App() {
  
  
 
 
    return (
  <>
 <Header />

 <Navbar />
 <div className="main-content">
 
<Routes >
  <Route path="home" element={<Home />} />
</Routes>
 </div>

  </>
 )
}

export default App
