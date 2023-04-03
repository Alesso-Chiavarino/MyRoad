import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import RegisterForm from '@/components/RegisterForm'

const register = () => {

    const navigate = useRouter()

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        name: ''
    })

    const [inputType, setInputType] = useState('password');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/auth/register', credentials)
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            navigate.push('/auth/login')
        }

    }

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const showPassword = () => {
        setInputType(inputType === 'password' ? 'text' : 'password')
    }

    return (
        <Layout title='Register'>
            <div className='flex justify-center mt-20'>
                <RegisterForm showPassword={showPassword} handleChange={handleChange} handleSubmit={handleSubmit} inputType={inputType} />
            </div>
        </Layout>
    )
}

export default register