import './App.css'
// import Login from './components/Login'

import { RouterProvider } from 'react-router'
import { Router } from './Router'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      {/* <Login/> */}
      <h2>app</h2>
      <NavBar></NavBar>

      <RouterProvider router={Router} />
    </>
  )
}

export default App
