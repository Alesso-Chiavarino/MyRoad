const CareerForm = ({ handleSubmit, handleCareer, handleCareersSubjectsForm, handleSemester, subjectsListRender, semester }) => {
    return (
        <div className="bg-[#111111] w-[600px] rounded-md p-10">
            <h1 className="text-3xl text-white font-extrabold mb-10">Create a Career</h1>
            <form action="" onSubmit={handleSubmit} className=" ">
                <span className="text-[#D6DEE7] font-bold block mb-2 text-lg">Information of the career</span>
                <div className="flex flex-col gap-10">

                    <div className="grid grid-cols-2 gap-5 text-[#D6DEE7]">
                        <input type="text" name="name" placeholder="name..." onChange={handleCareer} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />

                        <input type="text" name="description" placeholder="description..." onChange={handleCareer} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />

                        <input type="text" name="image" placeholder="image..." onChange={handleCareer} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />

                        <input type="text" name="salary" placeholder="salary..." onChange={handleCareer} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />
                    </div>

                    <div className="">
                        <span className="text-[#D6DEE7] font-bold block mb-2 text-lg">Information of the subjects</span>
                        <div className="flex flex-col gap-5">

                            <select className="block px-3 py-2 text-[#D6DEE7] font-medium bg-transparent border border-gray-300 rounded-md shadow-sm w-1/2 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="careers" onChange={handleCareersSubjectsForm}>
                                <option value="" className="bg-[#111111] font-medium text-[#D6DEE7]">
                                    Select a career
                                </option>
                                <option value="Informatic Engineering" className="bg-[#111111] font-medium text-[#D6DEE7]">
                                    Informatic Engineering
                                </option>
                            </select>

                            <input type="text" name="number" placeholder="semester num" onChange={handleSemester} value={semester.number} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none text-[#D6DEE7] focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />
                            {subjectsListRender()}
                        </div>
                    </div>
                </div>

                <button className="bg-white font-bold w-full rounded-md py-2 mt-5">Create</button>
            </form>
        </div>
    )
}

export default CareerForm