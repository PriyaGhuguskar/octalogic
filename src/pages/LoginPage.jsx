import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../reduxStore/AuthStore';
import loginLogo from '../assets/login.png'


const LoginPage = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const ValueChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(formData)
        dispatch(login());



    };


    return (
        <div className=' flex flex-col justify-center border border-stone-500 rounded-xl w-3/6 max-w-lg
        '>
            <div className=' bg-gray-300 max-w-lg max-h-52 flex items-center justify-between'>
                <div className='heading ml-6 text-3xl flex gap-2 h-10'>
                    Login

                </div>
                <div>
                    <img src={loginLogo} alt='login' width={177}
                        height={144} />
                </div>
            </div>
            <div className=' h-60 flex flex-col gap-7 p-3'>
                <form onSubmit={handleSubmit} className=' flex flex-col my-3 bg-transparent gap-5 p-3'>
                    <input
                        required
                        type="text"
                        name='username'
                        className=' p-2 text-black bg-transparent border rounded-lg border-stone-300'
                        value={formData.username}
                        onChange={ValueChange}
                        placeholder="username"
                    />


                    <input type="Password"
                        placeholder="Password"
                        required
                        className=' p-2 text-black bg-transparent border rounded-lg border-stone-300'
                        name='password'
                        value={formData.password}
                        onChange={ValueChange}
                    />

                    <button className=' h-11 border font-semibold py-1 text-lg bg-gray-300' type="submit">Login</button>
                </form>
            </div>

        </div>

    )
}

export default LoginPage