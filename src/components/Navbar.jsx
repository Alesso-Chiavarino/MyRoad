import { AiFillHome } from 'react-icons/ai'
import { IoSchool, IoLogIn } from 'react-icons/io5'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-[#171717] w-full border-b-[0.1px] border-white/10'>
            <nav className='flex items-center py-3 justify-between mx-auto container'>
                <div className='flex items-center gap-5'>
                    <div className='flex font-extrabold text-3xl gap-1'>
                        <h1 className='text-white'>My</h1>
                        <h1 className='text-[#7148FC]'>Road</h1>
                    </div>
                    <ul className='flex gap-3 font-bold text-[#B8BFC6]'>
                        <div className='flex gap-1 items-center cursor-pointer px-3 py-1 transition-all duration-200 hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white rounded-md hover:border-white'>
                            <AiFillHome />
                            <li> <Link href={'/'}>Home</Link> </li>
                        </div>
                        <div className='flex gap-1 items-center cursor-pointer px-3 py-1 transition-all duration-200 hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white rounded-md hover:border-white'>
                            <IoSchool />
                            <li> <Link href={'/career/create'}>Careers</Link> </li>
                        </div>
                    </ul>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className='flex gap-1 items-center font-bold text-[#B8BFC6] cursor-pointer px-3 py-1 transition-all duration-200 hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white rounded-md hover:border-white'>
                        <IoLogIn className='text-xl' />
                        <Link href="/auth/login">Login</Link>
                    </div>
                    <Link href={'/auth/register'} className='bg-[#7148FC] hover:bg-[#6030ffd8] cursor-pointer text-white font-bold px-3 py-1 rounded-md'>Sign Up</Link>
                </div>

            </nav>
        </div>
    )
}

export default Navbar