import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Account = ({ user }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (e.target[0].name === 'email') {
      const res = await axios.put('/api/auth/update', { email })
      return console.log(res)
    } else if (e.target[0].name === 'password') {

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            console.log(password)
            const res = await axios.put('/api/auth/update', { password })
            console.log(res)

          }
          catch (err) {
            console.log(err)
          }
          finally {
            swalWithBootstrapButtons.fire(
              'Changed!',
              'Your password has been changed.'
            )
          }

        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })

    }
  }

  return (
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
          <form onSubmit={handleSubmit} className='flex gap-3' action="">
            <input onChange={handlePassword} name='password' placeholder='Type your new password' type="password" className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-2/5 bg-transparent font-bold outline-none' />
            <button className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent hover:text-black'>Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Account