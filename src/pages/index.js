import Career from "@/components/Career";
import Layout from "@/components/Layout";
import Link from "next/link";
import { MdArrowForwardIos } from 'react-icons/md'

const Home = () => {

  return (
    <Layout title={'Home'}>
      <header>
        <div className="container mx-auto grid grid-cols-2 items-center h-[70vh]">
          <div className="w-full flex flex-col gap-5">
            <h1 className='text-white text-6xl font-extrabold'>Control your university success with us</h1>
            <h3 className='text-[#B8BFC6] text-xl font-bold'>Register, search and follow university academic statistics.</h3>
            <Link href={'/dashboard'} className='text-white font-bold w-fit rounded-md px-4 flex items-center py-3 gap-2 bg-[#7148FC]'>Go to Dashboard <MdArrowForwardIos className="text-xl" /></Link>
          </div>

          <div></div>
        </div>
      </header>
      {/* <Career /> */}
    </Layout>


  )

}

export default Home;