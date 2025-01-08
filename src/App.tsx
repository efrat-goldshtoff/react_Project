import './App.css'
// import Login from './components/Login'

import { RouterProvider } from 'react-router'
import myRouter from './Router'


function App() {

  return (
    <>
    {/* <Login/> */}
      {/* <h2>app</h2> */}
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
