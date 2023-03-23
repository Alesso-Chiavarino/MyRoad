import { useCareer } from "@/context/CareerContext"
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CalificationForm = () => {

    const { career } = useCareer()

    const [semester, setSemester] = useState({})
    const [calification, setCalification] = useState({})
    const [subject, setSubject] = useState({})
    const [exam, setExam] = useState({})

    const handleSemesters = (e) => {
        const semesterSelected = career[0]?.semesters.find(semester => semester.number === e.target.value)
        setSemester(semesterSelected)
    }

    const handleCalification = (e) => {
        setCalification(e.target.value)
    }

    const handleSubject = (e) => {
        setSubject(e.target.value)
    }

    const handleExam = (e) => {
        setExam(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (exam === 'Final' && calification >= 4) {
                console.log('nashe')
                const res = await axios.put(`http://localhost:3000/api/career/califications/update?id=${career[0]._id}`, {
                    semester,
                    subject
                })
                console.log(res)
            }

            const res = await axios.post(`http://localhost:3000/api/career/califications/create?id=${career[0]._id}`, {
                semester,
                calification,
                exam,
                subject
            })
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            toast(`Calification of ${subject} added successfully`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-2/4">
            <div className='flex gap-5 flex-col'>
                <div>
                    <label className="text-white" htmlFor="calification">Semester</label>
                    <select onChange={handleSemesters} className="block px-3 py-2 text-[#D6DEE7] w-full font-medium bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="careers">
                        <option value='' className="bg-[#111111] font-medium text-[#D6DEE7]">
                            Select a semester
                        </option>
                        {career[0]?.semesters.map((semester, index) => (
                            <option key={index} value={semester.number} className="bg-[#111111] font-medium text-[#D6DEE7]">
                                {semester.number}
                            </option>
                        ))}

                    </select>
                </div>


            </div>
            <div className="flex justify-between">
                <div>
                    <label className="text-white" htmlFor="semesters">Subjects</label>
                    <select onChange={handleSubject} className="block px-3 py-2 text-[#D6DEE7] w-full font-medium bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="semesters">
                        <option value=''>select a subject</option>
                        {semester?.subjects?.map((subject, index) => (
                            <option key={index} value={subject.name}>{subject.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="text-white" htmlFor="exam">Exams</label>
                    <select onChange={handleExam} className="block px-3 py-2 text-[#D6DEE7] font-medium bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="exam" id="">
                        <option value="">Select a exam</option>
                        <option value="1° Partial">1° Partial</option>
                        <option value="2° Partial">2° Partial</option>
                        <option value="3° Partial">3° Partial</option>
                        <option value="4° Partial">4° Partial</option>
                        <option value="5° Partial">5° Partial</option>
                        <option value="6° Partial">6° Partial</option>
                        <option value="7° Partial">7° Partial</option>
                        <option value="8° Partial">8° Partial</option>
                        <option value="Final">Final</option>
                    </select>
                </div>
                <div>
                    <label className="text-white" htmlFor="calification">Calification</label>
                    <select onChange={handleCalification} className="block px-3 py-2 text-[#D6DEE7] font-medium bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="califications" id="">
                        <option value="">Select a calification</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="bg-white px-3 py-2 font-bold rounded-md">Enviar</button>
            <ToastContainer />
        </form>
    )
}

export default CalificationForm