import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const register = () => {

    const navigate = useRouter()

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/auth/register', credentials)
        console.log(res)
        }
        catch(err) {
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

    return (
        <section>
            <h1>Register</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='name...' onChange={handleChange} />
                <input type="text" name='email' placeholder='email...' onChange={handleChange} />
                <input type="text" placeholder='password...' name='password' onChange={handleChange} />

                <button>Register</button>
            </form>
        </section>
    )
}

export default register