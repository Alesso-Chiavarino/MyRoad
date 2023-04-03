import Link from 'next/link'

const Career = () => {
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
          <Link href='/career/update' className='border-[1px] border-gray-300 rounded-md px-4 py-2 text-gray-300 text-sm w-fit font-bold hover:bg-white hover:border-transparent hover:text-black'>Delete your career</Link>
        </div>
      </div>
    </div>
  )
}

export default Career