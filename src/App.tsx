import './App.css'

import { RouterProvider } from 'react-router'
import myRouter from './Router'
// import HomePage from './components/Home/HomePage'

function App() {

  return (
    <>
      {/* <HomePage /> */}
      <RouterProvider router={myRouter} />
    </>
  )
}

export default App
