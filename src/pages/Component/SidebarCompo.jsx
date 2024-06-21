import React from 'react'
import home from '../../assets/home.png'
import courses from '../../assets/courses.png'
import logoutpng from '../../assets/logout.png'
import logo from '../../assets/Logo.png'
import { useDispatch } from 'react-redux';
import { logout } from '../../reduxStore/AuthStore';


const SidebarCompo = ({ setView }) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <>
            <div className='w-full h-20 bg-white sm:pt-4 fixed flex flex-row justify-between sm:w-24 sm:h-full  sm:flex-col px-5 sm:px-0 z-10'>
                <div className=' flex items-center sm:block gap-2 sm:gap-0'>
                    <div className='flex justify-center '>
                        <img src={logo} alt="" className='w-10 h-10' />
                    </div>
                    <div className='flex gap-4 sm:p-2 sm:mt-10 sm:flex-col '>
                        <img src={home} alt="" onClick={() => setView('overview')} />
                        <img src={courses} alt="" onClick={() => setView('courses')} />
                    </div>
                </div>

                <img src={logoutpng} alt="" className='py-4 sm:mb-3' onClick={handleLogout} />

            </div>
        </>
    )
}

export default SidebarCompo