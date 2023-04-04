import axios from 'axios'
import { useState } from 'react'
import ConfirmModal from '../ConfirmModal'
import { ToastContainer, toast } from 'react-toastify'

const Account = ({ user, userInfo }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [originalPassword, setOriginalPassword] = useState('')

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleOriginalPassword = (e) => {
    setOriginalPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (e.target[0].name === 'email') {
      const res = await axios.put('/api/auth/update', { email })
      return console.log(res)
    } else if (e.target[0].name === 'originalPassword') {
      try {
        const res = await axios.put('/api/auth/update', { originalPassword, password })
        return console.log(res)
      }
      catch (err) { console.log(err) }
      finally {
        closeModal()
        toast(`Password changed successfully`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }

  return (
    <>
      <div className='text-gray-300 flex flex-col gap-10'>
        <div>
          <h2 className='font-semibold text-2xl'>Change your email</h2>
          <hr className='opacity-60 my-5' />
          <span className='text-sm'>Changing your email will <b>not</b> change your username.</span>
          <div className='flex flex-col gap-3 mt-2'>
            <form onSubmit={handleSubmit} className='flex gap-3' action="">
              <input defaultValue={user?.email} onChange={handleEmail} type="email" name='email' className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-2/5 bg-transparent font-bold outline-none' placeholder='Enter your new email' />
              <button className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent hover:text-black'>Save</button>
            </form>
          </div>
        </div>
        <div>
          <h2 className='font-semibold text-2xl'>Change your password</h2>
          <hr className='opacity-60 my-5' />
          <span className='text-sm'>Changing your password will <b>not</b> change your username.</span>
          <div className='flex flex-col gap-3 mt-2'>
            <form className='flex gap-3' action="">
              <input onChange={handlePassword} name='password' placeholder='Type your new password' type="password" className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-2/5 bg-transparent font-bold outline-none' />
              <button type='button' onClick={openModal} className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent hover:text-black'>Save</button>
            </form>
          </div>
        </div>
      </div>
      <ConfirmModal isOpen={isModalOpen} onClose={closeModal} title="Are you absolutely sure?" >
        <span className='text-gray-300'>Are you sure you want to change your account password?</span>
        <span className='text-gray-300'>This action cannot be undone. This <b>will change</b> the <b>{userInfo?.name} password</b>
        </span>
        <span className='text-gray-300'>Please type your original password to confirm.</span>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 items-center' action="">
          <input onChange={handleOriginalPassword} name='originalPassword' placeholder='Type your original password' type="password" className='border-[1px] border-gray-300 w-full rounded-md px-2 py-1 text-gray-300 text-sm bg-transparent font-bold outline-none' />
          <button className='border-[1px] border-gray-300/50 bg-[#111111] w-full rounded-md px-2  mt-2 py-1 text-red-300 text-sm font-bold hover:bg-red-500 hover:border-transparent hover:text-white'>I understand the consequences, change the password</button>
        </form>

      </ConfirmModal>
      <ToastContainer />
    </>
  )
}

export default Account