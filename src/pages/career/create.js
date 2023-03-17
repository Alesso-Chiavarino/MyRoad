import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Layout from "@/components/Layout";

const create = () => {
    const [career, setCareer] = useState({
        name: "",
        description: "",
        image: "",
        salary: "",
        semesters: [],
    });

    const [subjects, setSubjects] = useState([]);

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
        }
        if (!e.target.checked) {
            const newSubjects = subjects.filter(sub => sub.name !== e.target.name)
            setSubjects(newSubjects)
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
            subjects,
        });
    }, [subjects])

    useEffect(() => {
        setCareer({
            ...career,
            semesters: [semester],
        });
    }, [semester])

    const handleCareersSubjectsForm = (e) => {
        setCareerName(e.target.value)
    }

    const [careerName, setCareerName] = useState('')

    const subjectsList = () => {
        if (careerName === 'Informatic Engineering') {
            return (
                (
                    <div>
                        <span className="text-[#D6DEE7] font-bold block mb-2 text-lg">Subjects list</span>
                        <div className="flex flex-wrap gap-3">

                            <label className="cursor-pointer flex gap-2 text-[#D6DFF7] bg-[#111111] flex-row-reverse items-center justify-center border-[1px] border-[#B8BFC6] p-2 rounded-md">
                                <span>AM-1</span>
                                <input onChange={handleSubject} type="checkbox" name="AM-1" className="border-[1px] border-white form-tick appearance-none bg-check h-4 w-4  rounded-md checked:bg-[#7148FC]  checked:border-transparent focus:outline-none" />
                            </label>

                            <label className="cursor-pointer flex gap-2 text-[#D6DFF7] bg-[#111111] flex-row-reverse items-center justify-center border-[1px] border-[#B8BFC6] p-2 rounded-md">
                                <span>LAB-1</span>
                                <input onChange={handleSubject} type="checkbox" name="LAB-1" className="border-[1px] border-white form-tick appearance-none bg-check h-4 w-4  rounded-md checked:bg-[#7148FC]  checked:border-transparent focus:outline-none" />
                            </label>

                            <label className="cursor-pointer flex gap-2 text-[#D6DFF7] bg-[#111111] flex-row-reverse items-center justify-center border-[1px] border-[#B8BFC6] p-2 rounded-md">
                                <span>TD</span>
                                <input onChange={handleSubject} type="checkbox" name="TD" className="border-[1px] border-white form-tick appearance-none bg-check h-4 w-4  rounded-md checked:bg-[#7148FC]  checked:border-transparent focus:outline-none" />
                            </label>

                            <label className="cursor-pointer flex gap-2 text-[#D6DFF7] bg-[#111111] flex-row-reverse items-center justify-center border-[1px] border-[#B8BFC6] p-2 rounded-md">
                                <span>IT-1</span>
                                <input onChange={handleSubject} type="checkbox" name="IT-1" className="border-[1px] border-white form-tick appearance-none bg-check h-4 w-4  rounded-md checked:bg-[#7148FC]  checked:border-transparent focus:outline-none" />
                            </label>

                            <label className="cursor-pointer flex gap-2 text-[#D6DFF7] bg-[#111111] flex-row-reverse items-center justify-center border-[1px] border-[#B8BFC6] p-2 rounded-md">
                                <span>A-1</span>
                                <input onChange={handleSubject} type="checkbox" name="A-1" className="border-[1px] border-white form-tick appearance-none bg-check h-4 w-4  rounded-md checked:bg-[#7148FC]  checked:border-transparent focus:outline-none" />
                            </label>

                        </div>
                    </div>
                )
            )
        }
    }

    return (
        <Layout title={'Create Career'}>
            <section className="container mx-auto flex justify-center">
                <div className="bg-[#111111] w-[600px] rounded-md mt-20 p-10">
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

                                    <select className="block px-3 py-2 text-[#D6DEE7] font-medium bg-transparent border border-gray-300 rounded-md shadow-sm w-1/2 focus:outline-none focus:ring-primary-500 focus:border-primary-500" id="hola" name="careers" onChange={handleCareersSubjectsForm}>
                                        <option value="" className="bg-[#111111] font-medium text-[#D6DEE7]">
                                            Select a career
                                        </option>
                                        <option value="Informatic Engineering" className="bg-[#111111] font-medium text-[#D6DEE7]">
                                            Informatic Engineering
                                        </option>
                                    </select>

                                    <input type="text" name="number" placeholder="semester num" onChange={handleSemester} className='bg-[#111111] border-[1px] border-[#B8BFC6] p-2 rounded-md w-full outline-none focus:border-[#7148FC] transition-all duration-300 placeholder:font-medium' />
                                    {subjectsList()}
                                </div>
                            </div>
                        </div>

                        <button className="bg-white font-bold w-full rounded-md py-2 mt-5">Create</button>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default create;

