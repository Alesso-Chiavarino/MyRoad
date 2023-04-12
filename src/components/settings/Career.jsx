import Link from 'next/link'
import { useCareer } from '@/context/CareerContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ConfirmModal from '../ConfirmModal';
import { useState } from 'react';

const Career = () => {

  const { deleteCareer, career } = useCareer()

  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <div className='text-gray-300 flex flex-col gap-10'>
      <div>
        <h2 className='font-semibold text-2xl'>Update your career</h2>
        <hr className='opacity-60 my-5' />
        <div className='flex flex-col gap-3'>
          <span className='text-sm'>Changing your career <b>will change</b> your profile and your feed.</span>
          <a href='/career/update' className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent hover:text-black'>Update your career</a>
        </div>
      </div>
      <div>
        <h2 className='font-semibold text-2xl'>Delete your career</h2>
        <hr className='opacity-60 my-5' />
        <div className='flex flex-col gap-3'>
          <span className='text-sm'>Deleting your career <b>will delete</b> your profile and your feed.</span>
          <button className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent hover:text-black' onClick={handleModal}>Delete your career</button>
        </div>
      </div>
      <ConfirmModal onClose={onClose} isOpen={isOpen} title='Are you absolutely sure?' >

        <span className='text-gray-300'>Are you sure you want to delte your career?</span>
        <span className='text-gray-300'>This action cannot be undone. This <b>will change</b> the {career[0]?.name}<b> password</b>
        </span>
        <span className='text-gray-300'>Please type your <b>original</b> password to confirm.</span>
        <form className='flex flex-col gap-3 items-center' action="">
          <input name='originalPassword' placeholder='Type your original password' type="password" className='border-[1px] border-gray-300 w-full rounded-md px-2 py-1 text-gray-300 text-sm bg-transparent font-bold outline-none' />
          <button className='border-[1px] border-gray-300/50 bg-[#111111] w-full rounded-md px-2  mt-2 py-1 text-red-300 text-sm font-bold hover:bg-red-500 hover:border-transparent hover:text-white'>I understand the consequences, change the password</button>
        </form>
      </ConfirmModal>
      <ToastContainer />
    </div>
  )
}

export default Career