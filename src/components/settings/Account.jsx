import Link from 'next/link'

const Account = ({ user }) => {

  return (
    <div className='text-gray-300 flex flex-col gap-10'>
      <div>
        <h2 className='font-semibold text-2xl'>Change your email</h2>
        <hr className='opacity-60 my-5' />
        <span className='text-sm'>Changing your email will <b>not</b> change your username.</span>
        <div className='flex flex-col gap-3 mt-2'>
          <form className='flex gap-3' action="">
            <input defaultValue={user?.email} type="email" className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-2/5 bg-transparent font-bold outline-none' placeholder='Enter your new email' />
            <button className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent hover:text-black'>Save</button>
          </form>
        </div>
      </div>
      <div>
        <h2 className='font-semibold text-2xl'>Change your password</h2>
        <hr className='opacity-60 my-5' />
        <div className='flex flex-col gap-3'>
          <span className='text-sm'>Changing your password will <b>not</b> change your username.</span>
          <Link href={'#'} className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent hover:text-black'>Change your password</Link>
        </div>
      </div>
    </div>
  )
}

export default Account