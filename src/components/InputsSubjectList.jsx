import { MdFilterListAlt } from 'react-icons/md'
import { SiAddthis } from 'react-icons/si'

const InputsSubjectList = ({ subjectsList, handleSubject, handleSemesterStore }) => {
    return (
        <div>
            <span className="text-[#D6DEE7] flex items-center gap-1 font-bold mb-2 text-lg">Subjects list <MdFilterListAlt /></span>
            <div className="flex flex-wrap gap-3">

                {subjectsList.map((subject, index) => {
                    return (
                        <label key={index} className="cursor-pointer flex gap-2 text-[#D6DFF7] bg-[#111111] flex-row-reverse items-center justify-center border-[1px] border-[#B8BFC6] p-2 rounded-md">
                            <span>{subject.name}</span>
                            <input onChange={handleSubject} type="checkbox" checked={subject.checked} name={subject.name} className="border-[1px] border-white form-tick appearance-none bg-check h-4 w-4  rounded-md checked:bg-[#7148FC]  checked:border-transparent focus:outline-none" />
                        </label>
                    )
                })}

            </div>
            <button className="bg-white font-bold rounded-md flex items-center gap-1 px-2 py-1 mt-5" onClick={handleSemesterStore}><SiAddthis />Add Semester</button>
        </div>
    )
}

export default InputsSubjectList