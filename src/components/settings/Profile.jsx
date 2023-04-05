import { useState } from "react"
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { renderToast } from '@/utils/toast'

const Profile = ({ userInfo, handleActivateEffect, activateEffect }) => {

  const [name, setName] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put('/api/auth/update', { name })
      console.log(res)
    }
    catch (err) {
      console.log(err)
    }
    finally {
      renderToast(`Name changed successfully`)
      handleActivateEffect(!activateEffect)
    }
  }

  return (
    <>
      <div className="text-gray-300">
        <h2 className='font-semibold text-2xl'>Change your name</h2>
        <hr className='opacity-60 my-5' />
        <span>Your name may appear around MyRoad anywhere. You <b>can change it</b> at any time.</span>
        <div className='flex flex-col gap-3 mt-2'>
          <form onSubmit={handleSubmit} className='flex gap-3' action="">
            <input defaultValue={userInfo?.name} onChange={handleName} type="text" name='name' className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-2/5 bg-transparent font-bold outline-none' placeholder='Enter your new email' />
            <button className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent hover:text-black'>Save</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Profile