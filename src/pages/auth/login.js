import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Layout from '@/components/Layout'
import LoginForm from '@/components/LoginForm'
import { useUser } from '@/context/UserContext'


const login = () => {

    const { handleIsLoged } = useUser()

    const navigate = useRouter()

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [inputType, setInputType] = useState('password');

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

        } catch (err) {
            console.log(err)
        }
        finally {
            handleIsLoged(true)
            return navigate.push('/')
        }
    }

    const showPassword = () => {
        setInputType(inputType === 'password' ? 'text' : 'password')
    }

    return (
        <Layout title={'Login'}>
            <div className='flex justify-center mt-20'>
                <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} inputType={inputType} showPassword={showPassword} />
            </div >
        </Layout >
    )
}

export default login