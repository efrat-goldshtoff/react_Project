import './App.css'

import { RouterProvider } from 'react-router'
import myRouter from './Router'
import HomePage from './components/HomePage'


function App() {

  return (
    <>
      {/* <h2>app</h2> */}
      <HomePage/>
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
