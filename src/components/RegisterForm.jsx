import Link from 'next/link'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const RegisterForm = ({ handleChange, handleSubmit, showPassword, inputType }) => {

    return (
        <div className='bg-white/50 p-[1px] rounded-md'>
            <div className="bg-[url('/img/auth-wave.svg')] w-fit flex justify-center flex-col min-w-[600px] p-10 rounded-md">
                <h1 className='text-4xl font-extrabold text-white'>User Registration</h1>
                <form action="" onSubmit={handleSubmit} className='flex flex-col gap-10 pt-10 w-full'>
                    <div className='flex flex-col text-[#D6DEE7] gap-2'>
                        <label htmlFor="name" className=' font-bold'>Name</label>
                        <input type="text" name='name' placeholder='Type your name' onChange={handleChange} className='bg-[#171717] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />
                    </div>
                    <div className='flex flex-col text-[#D6DEE7] gap-2'>
                        <label htmlFor="email" className=' font-bold'>Email</label>
                        <input type="text" name='email' placeholder='Type your email' onChange={handleChange} className='bg-[#171717] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />
                    </div>
                    <div className='flex flex-col text-[#D6DEE7] gap-2'>
                        <label htmlFor="password" className='text-[#D6DEE7] font-bold'>Password</label>
                        <div className='flex items-center relative'>
                            <input type={inputType} placeholder='Type your password' name='password' onChange={handleChange} className='bg-[#171717] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />
                            {inputType === 'password' ? <AiFillEyeInvisible onClick={showPassword} className='text-[#B8BFC6] right-4 absolute text-lg cursor-pointer' /> : <AiFillEye onClick={showPassword} className='text-[#B8BFC6] absolute right-4 text-lg cursor-pointer' />}
                        </div>
                    </div>
                    <button className='bg-white rounded-md py-2 font-bold hover:bg-white/90'>Sign Up</button>
                    <div className='flex gap-1 text-white'> <span>Already have an account?</span><Link href={'/auth/login'} className='text-[#7148FC]'>Login here.</Link> </div>
                </form>
            </div>
        </div>
    )

}

export default RegisterForm