import Link from "next/link"

const Brand = () => {
    return (
        <Link href={'/'} className='flex font-extrabold text-3xl gap-[3px]'>
            <h1 className='text-white'>My</h1>
            <h1 className='text-[#7148FC]'>Road</h1>
        </Link>
    )
}

export default Brand