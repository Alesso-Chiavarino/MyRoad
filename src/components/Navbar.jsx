import { AiFillHome } from 'react-icons/ai'
import { IoSchool, IoLogIn, IoLogOut } from 'react-icons/io5'
import { MdAccountCircle, MdSpaceDashboard } from 'react-icons/md'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Brand from './Brand'

const Navbar = () => {

    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useRouter()

    useEffect(() => {
        const loadToken = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/auth/token')
                const data = await res.json()
                if (data.token) {
                    setIsLogged(true)
                } else {
                    setIsLogged(false)
                }

            } catch (err) {
                console.log(err)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadToken()
    }, [])

    const handleLogout = async () => {
        const res = await axios.post('http://localhost:3000/api/auth/logout')
        if (res.status === 200) {
            navigate.push('/auth/login')
        }
    }


    const handleAuthButtons = () => {
        if (!isLoading) {
            if (!isLogged) {
                return (
                    <div className='flex gap-5 items-center'>
                        <Link href="/auth/login" className={`flex gap-1 items-center font-bold text-[#B8BFC6] cursor-pointer px-3 py-1 transition-all duration-200 rounded-md ${navigate.asPath === '/auth/login' ? 'bg-[#B8BFC6] bg-opacity-10 text-white' : 'hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white'}`}>
                            <IoLogIn className='text-xl' />
                            <span>Login</span>
                        </Link>
                        <Link href={'/auth/register'} className='bg-[#7148FC] hover:bg-[#6030ffd8] cursor-pointer text-white font-bold px-3 py-1 rounded-md'>Sign Up</Link>
                    </div>
                )
            } else {
                return (
                    <div className='flex gap-5 items-center'>
                        <div className='flex gap-1 items-center font-bold text-[#B8BFC6] cursor-pointer px-3 py-1 transition-all duration-200 hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white rounded-md' onClick={handleLogout}>
                            <IoLogOut className='text-xl' />
                            <button>Log out</button>
                        </div>
                        <MdAccountCircle className='text-2xl text-[#B8BFC6] cursor-pointer hover:text-white transition-all duration-200' />
                    </div>
                )
            }
        }
    }

    return (
        <div className='bg-[#171717] w-full border-b-[0.1px] border-white/10'>
            <nav className='flex items-center py-3 justify-between mx-auto container'>
                <div className='flex items-center gap-5'>
                    <Brand />
                    <ul className='flex gap-3 font-bold text-[#B8BFC6]'>
                        <Link href={'/'} className={`flex gap-1 items-center cursor-pointer px-3 py-1 transition-all duration-200 rounded-md ${navigate.asPath === '/' ? 'bg-[#B8BFC6] bg-opacity-10 text-white' : 'hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white'}`}>
                            <AiFillHome />
                            <li>Home</li>
                        </Link>
                        <Link href={'/dashboard'} className={`flex gap-1 items-center cursor-pointer px-3 py-1 transition-all duration-200 rounded-md ${navigate.asPath === '/dashboard' ? 'bg-[#B8BFC6] bg-opacity-10 text-white' : 'hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white'}`}>
                            <MdSpaceDashboard />
                            <li>Dashboard</li>
                        </Link>
                        <Link href={'/career/create'} className={`flex gap-1 items-center cursor-pointer px-3 py-1 transition-all duration-200 rounded-md ${navigate.asPath === '/career/create' ? 'bg-[#B8BFC6] bg-opacity-10 text-white' : 'hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white'}`}>
                            <IoSchool />
                            <li>Careers</li>
                        </Link>
                    </ul>
                </div>
                {handleAuthButtons()}

            </nav >
        </div >
    )
}

export default Navbar