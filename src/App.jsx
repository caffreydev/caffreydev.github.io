// react imports
import { Route, Router, Routes, useRoutes } from "react-router-dom"
import { useState } from "react"

// component imports
import { Header, Navbar, Home } from "./components"







function App() {
  
  
  // multi path routes
  const homeRoute = useRoutes(
    ["", "/", "/home"].map(str => {
      return {
        path: str,
        element: <Home />
      }
    })
    )
 
 
    return (
  <>
 <Header />

 <Navbar />
 <div className="main-content">
<Routes >
  homeRoute
</Routes>
 </div>

  </>
 )
}

export default App
