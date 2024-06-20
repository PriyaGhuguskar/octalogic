import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <div className='bg-gray-100 flex p-0 flex-col w-[100vw] h-[100vh] justify-center items-center m-0'>
        <Dashboard />
      </div>
    </>
  )
}

export default App
