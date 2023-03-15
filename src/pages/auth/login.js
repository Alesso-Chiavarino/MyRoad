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
            <h1>holap</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='email' placeholder='email...' onChange={handleChange} />
                <input type="text" placeholder='password...' name='password' onChange={handleChange} />
                <button>Login...</button>
            </form>
        </Layout>
    )
}

export default login