import { useState, useEffect, useRef } from "react"
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { renderToast } from '@/utils/toast'
import { RxUpdate } from 'react-icons/rx'
import { FiUpload } from 'react-icons/fi'

const Profile = ({ userInfo, handleActivateEffect, activateEffect }) => {

  const [name, setName] = useState('')
  const [file, setFile] = useState(null)
  const [bio, setBio] = useState('')
  const [image, setImage] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleBio = (e) => {
    setBio(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (e.target[0].value !== userInfo.name) {
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
    if (e.target[1].value !== userInfo.bio) {
      try {
        const res = await axios.put('/api/auth/update', { bio })
        console.log(res)
      }
      catch (err) {
        console.log(err)
      }
      finally {
        renderToast(`Bio changed successfully`)
        handleActivateEffect(!activateEffect)
      }
    }
    if (e.target[2].value !== '') {
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
        renderToast(`Image changed successfully`)
        handleActivateEffect(!activateEffect)
      }
    }
  }

  //image handler

  const handleFile = (e) => {
    setFile(e.target.files[0])
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

  const [isOver, setIsOver] = useState(false)

  const handleImageOver = () => {
    setIsOver(true)
  }

  const handleImageOut = () => {
    setIsOver(false)
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
              <form onSubmit={handleSubmit} className='flex flex-col gap-3' action="">
                <div>
                  <input defaultValue={userInfo?.name} onChange={handleName} type="text" name='name' className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-full bg-transparent font-bold outline-none' placeholder='Enter your new email' />
                  <span className="text-sm">Your name may appear around MyRoad anywhere. You <b>can change it</b> at any time.</span>
                </div>
                <label className="text-sm font-bold" htmlFor="name">Bio</label>
                <div>
                  <textarea defaultValue={userInfo?.bio} onChange={handleBio} type="text" name='bio' className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-full bg-transparent font-bold outline-none max-h-[400px] h-fit' placeholder='Enter your new email' />
                  <span className="text-sm">You can <b>@mention</b> other users and organizations to link to them.</span>
                </div>
                <input className="collapse" ref={inputFileRef} onChange={handleFile} type="file" name="file" />
                <button className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent flex items-center gap-1 hover:text-black'><RxUpdate className='text-lg' />Update profile</button>
              </form>

            </div>
          </div>
          <div>
            <div>
              <label className="text-sm font-bold block mb-2" htmlFor="image">Profile picture</label>
              <div onMouseOver={handleImageOver} className="w-48 h-48 rounded-full overflow-hidden border-[1px] border-[#B8BFC6] relative cursor-pointer">
                <img onClick={hanldeImageClick} className={`w-full h-full object-cover bg-center cursor-pointer ${isOver && 'opacity-30'}`} src={userInfo?.avatar_url?.url} alt={userInfo.name} />
                {isOver && <div onMouseOut={handleImageOut} className='absolute top-0 left-0 flex-col gap-2 w-full h-full bg-black bg-opacity-50 flex items-center justify-center' onClick={hanldeImageClick}>
                  <span className="font-bold">Upload a photo</span>
                  <FiUpload className="text-2xl " />
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Profile