import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './components/navigation/Routes'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
