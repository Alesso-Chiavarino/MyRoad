import { IoClose } from 'react-icons/io5'
import { FaListAlt } from 'react-icons/fa'
import { MdContentPasteOff } from 'react-icons/md'

const SemestersFormList = ({ semesterListStore, deleteSemester }) => {
    return (
        <div className="bg-[#111111] w-[300px] p-10 rounded-md text-white ">
            <h3 className="font-bold text-lg flex mb-10 gap-2 items-center"><FaListAlt />Semesters</h3>
            {semesterListStore.length === 0 && <span className="text-[#D6DEE7] font-semibold">Add a semester...</span>}
            {semesterListStore.length === 0 && <MdContentPasteOff className='text-[40px] mt-2' />}
            <ul className="flex flex-col gap-5 h-[500px] overflow-y-auto">
                {semesterListStore.map((semester, index) => {
                    //list in the menor to the mayor
                    return (
                        <li key={index} className='bg-[#1A1A1A] flex flex-col rounded-md'>
                            <IoClose onClick={() => deleteSemester(semester.number)} className="self-end text-xl text-[#D6DEE7] cursor-pointer m-2 hover:text-white" />
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-[#D6DEE7] px-5">{semester.number}° semester</h3>
                                <ul className="grid grid-cols-3 gap-5 py-3 px-5">
                                    {semester.subjects.map((subject, index) => {
                                        return (
                                            <li key={index} className='bg-[#252525] rounded-md text-center text-[#D6DEE7]'>{subject.code}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SemestersFormList