
import './App.css'
import { useSelector } from 'react-redux';

import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage';
function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const isLoggedIn = false

  return (
    <>


      <div className='bg-gray-100 flex p-0 flex-col w-[100vw] h-[100vh] justify-center items-center m-0'>

        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <LoginPage />
        )}


      </div >



    </>
  )
}

export default App
