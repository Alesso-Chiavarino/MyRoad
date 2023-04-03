import { IoIosCreate } from 'react-icons/io'
import { useCareer } from '@/context/CareerContext'

const CareerFormUpdate = ({ handleSubmit, handleCareer, handleCareersSubjectsForm, handleSemester, subjectsListRender, semester }) => {

    const { career } = useCareer()

    return (
        <div className="bg-[#111111] w-[600px] rounded-md p-10">
            <h1 className="text-3xl text-white font-extrabold mb-10">Update a Career</h1>
            <form action="" onSubmit={handleSubmit} className=" ">
                <span className="text-[#D6DEE7] font-bold block mb-2 text-lg">Information of the career</span>
                <div className="flex flex-col gap-10">

                    <div className="grid grid-cols-2 gap-5 text-[#D6DEE7]">
                        <input defaultValue={career[0]?.name} type="text" name="name" placeholder="Type career name" onChange={handleCareer} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />

                        <input defaultValue={career[0]?.description} type="text" name="description" placeholder="Type career description" onChange={handleCareer} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />

                        <input defaultValue={career[0]?.image} type="text" name="image" placeholder="Attach image url" onChange={handleCareer} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />

                        <input defaultValue={career[0]?.salary} type="text" name="salary" placeholder="Type the cost" onChange={handleCareer} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />
                    </div>

                    <div className="">
                        <span className="text-[#D6DEE7] font-bold block mb-2 text-lg">Information of the subjects</span>
                        <div className="flex flex-col gap-5">

                            <div className='flex gap-5'>
                                <select className="block px-3 py-2 text-[#D6DEE7] w-full font-medium bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="careers" onChange={handleCareersSubjectsForm}>
                                    <option value="" className="bg-[#111111] font-medium text-[#D6DEE7]">
                                        Select a semester
                                    </option>
                                    <option value="Informatic Engineering" className="bg-[#111111] font-medium text-[#D6DEE7]">
                                        Informatic Engineering
                                    </option>
                                </select>

                                <input type="number" name="number" placeholder="Select the semester num" onChange={handleSemester} value={semester.number} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none text-[#D6DEE7] focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />
                            </div>
                            {subjectsListRender()}
                        </div>
                    </div>
                </div>

                <button className="bg-white font-bold w-full rounded-md py-2 mt-5 flex items-center justify-center"><IoIosCreate className='text-xl' />Update</button>
            </form>
        </div>
    )
}

export default CareerFormUpdate