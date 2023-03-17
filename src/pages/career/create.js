import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import { IoClose } from "react-icons/io5";

const create = () => {
    const [career, setCareer] = useState({
        name: "",
        description: "",
        image: "",
        salary: "",
        semesters: [],
    });

    const [subjects, setSubjects] = useState([]);

    const [subjectsList, setSubjectsList] = useState([
        {
            name: "AM-1",
            checked: false,
        },
        {
            name: "LAB-1",
            checked: false,
        },
        {
            name: "TD",
            checked: false,
        },
        {
            name: "IT-1",
            checked: false,
        },
        {
            name: "A-1",
            checked: false,
        },
    ]);

    const [semester, setSemester] = useState({
        number: "",
        subjects: [],
    });

    const handleCareer = async (e) => {
        setCareer({
            ...career,
            [e.target.name]: e.target.value,
            semesters: [semester],
        });
    };

    const handleSemester = async (e) => {
        setSemester({
            ...semester,
            [e.target.name]: e.target.value,
            subjects
        });
        setCareer({
            ...career,
            semesters: [semester],
        });
    };

    const handleSubject = async (e) => {
        if (e.target.checked) {
            setSubjects([
                ...subjects,
                {
                    name: e.target.name,
                }
            ]);
            setSemester({
                ...semester,
                subjects,
            });

            const newListSubjects = subjectsList.map(subject => {
                if (subject.name === e.target.name) {
                    return {
                        ...subject,
                        checked: true
                    }
                }
                return subject
            })
            setSubjectsList(newListSubjects)

        }

        if (!e.target.checked) {
            const newSubjects = subjects.filter(sub => sub.name !== e.target.name)
            setSubjects(newSubjects)
            setSemester({
                ...semester,
                subjects: newSubjects,
            });

            const newListSubjects = subjectsList.map(subject => {
                if (subject.name === e.target.name) {
                    return {
                        ...subject,
                        checked: false
                    }
                }
                return subject
            })
            setSubjectsList(newListSubjects)
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/career/create", career);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setSemester({
            ...semester,
            // ...semesterListStore, i update this
        });
    }, [subjects])

    useEffect(() => {
        setCareer({
            ...career,
            semesters: semesterListStore,
        });
    }, [semester])

    const handleCareersSubjectsForm = (e) => {
        setCareerName(e.target.value)
    }

    const [careerName, setCareerName] = useState('')

    const [semesterListStore, setSemesterListStore] = useState([])

    const handleSemesterStore = (e) => {
        e.preventDefault()

        setSemesterListStore([
            ...semesterListStore,
            {
                number: semester.number,
                subjects: subjects
            }
        ])

        const newListSubjects = subjectsList.map(subject => {
            return {
                ...subject,
                checked: false
            }
        })
        setSubjectsList(newListSubjects)

        setSemester({
            number: '',
            subjects: []
        })
        setSubjects([])
    }

    const subjectsListRender = () => {
        if (careerName === 'Informatic Engineering') {

            return (
                (
                    <div>
                        <span className="text-[#D6DEE7] font-bold block mb-2 text-lg">Subjects list</span>
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
                        <button className="bg-white font-bold rounded-md px-2 py-1 mt-5" onClick={handleSemesterStore}>Add Semester</button>
                    </div>
                )
            )
        }
    }

    const deleteSemester = (semesterNumber) => {
        const newSemesterListStore = semesterListStore.filter(semester => semester.number !== semesterNumber)
        setSemesterListStore(newSemesterListStore)
    }

    useEffect(() => {
        //store semester from the menor to the mayor
        setSemesterListStore(semesterListStore.sort((a, b) => a.number - b.number))
    }, [semesterListStore])

    return (
        <Layout title={'Create Career'}>
            <section className="container mx-auto flex justify-center mt-20 gap-20">
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
                <div className="bg-[#111111] w-[300px] p-10 rounded-md text-white ">
                    <h3 className="font-bold text-lg mb-2">Semesters</h3>
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
                                                    <li key={index} className='bg-[#252525] rounded-md text-center text-[#D6DEE7]'>{subject.name}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </Layout>
    );
};

export default create;

