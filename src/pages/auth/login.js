import { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'

const login = () => {

    const navigate = useRouter()

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const res = await axios.post('/api/auth/login', credentials)

            if (!res.status === 200) {
                console.log('error')
            }

            return navigate.push('/')

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Layout title={'Login'}>
            <div className='flex justify-center mt-20'>
                <div className='bg-black w-fit flex justify-center items-center flex-col min-w-[600px] p-10 rounded-md'>
                    <h1 className='text-3xl font-extrabold text-white'>User Login</h1>
                    <form action="" onSubmit={handleSubmit} className='flex flex-col gap-5 p-5 w-full'>
                        <div className='flex flex-col text-[#D6DEE7] gap-1'>
                            <label htmlFor="email" className=' font-bold'>Email</label>
                            <div className='rounded-md bg-[#B8BFC6] p-[1px]'>
                                <input type="text" name='email' placeholder='email...' onChange={handleChange} className='bg-black p-2 rounded-md w-full outline-none' />
                            </div>
                        </div>
                        <div className='flex flex-col text-[#D6DEE7] gap-1'>
                            <label htmlFor="password" className='text-[#D6DEE7] font-bold'>Password</label>
                            <div className='rounded-md bg-[#B8BFC6] p-[1px]'>
                                <input type="text" placeholder='password...' name='password' onChange={handleChange} className='bg-black p-2 rounded-md w-full outline-none' />
                            </div>
                        </div>
                        <button className='bg-white rounded-md py-2 font-bold'>Login</button>
                    </form>
                </div>
            </div >
        </Layout >
    )
}

export default login