import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { renderToast } from '@/utils/toast'

const Profile = ({ userInfo, handleActivateEffect, activateEffect }) => {

  const [name, setName] = useState('')
  const [file, setFile] = useState(null)
  const [image, setImage] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const updateImage = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'myroad')
      const res = await axios.post('https://api.cloudinary.com/v1_1/dotaebdx8/image/upload', formData)
      console.log(res.data)
      setImage(res.data)
    }
    catch (err) {
      console.log(err)
    }
    finally {
      setIsLoading(false)
    }

  }

  useEffect(() => {
    const postImage = async () => {
      if (image && isLoading === false) {
        console.log('ta')
        console.log(image)
        try {
          const res = await axios.post('/api/auth/postAvatar', { image })
          console.log(res)
        } catch (err) {
          console.log(err)
        }
      }
    }
    postImage()
  }, [image, isLoading])

  const inputFileRef = useRef(null)

  const hanldeImageClick = () => {
    inputFileRef.current.click()
  }


  return (
    <>
      <div className="text-gray-300">
        <h2 className='font-semibold text-2xl'>Public profile</h2>
        <hr className='opacity-60 my-5' />
        <div className="flex gap-20">
          <div>
            <div className='flex flex-col gap-3'>
              <label className="text-sm font-bold" htmlFor="name">Name</label>
              <form onSubmit={handleSubmit} className='flex gap-3' action="">
                <input defaultValue={userInfo?.name} onChange={handleName} type="text" name='name' className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-2/5 bg-transparent font-bold outline-none' placeholder='Enter your new email' />
                <button className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent hover:text-black'>Save</button>
              </form>
              <span className="text-sm">Your name may appear around MyRoad anywhere. You <b>can change it</b> at any time.</span>
            </div>
          </div>
          <div>
            <div>
              <label className="text-sm font-bold" htmlFor="image">Profile picture</label>
              <div className="w-48 h-48 rounded-[100%] overflow-hidden">
                <img onClick={hanldeImageClick} className="w-full h-full bg-cover cursor-pointer" src={userInfo.avatar_url} alt={userInfo.name} />
              </div>
            </div>
            <form className="collapse" onSubmit={updateImage}>
              <input ref={inputFileRef} onChange={handleFile} type="file" name="file" />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Profile