import { useState, useEffect } from "react";
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

    const subjectsList = () => (
        <div className="flex flex-wrap gap-3">

            <label className="cursor-pointer flex gap-2">
                <span>AM-1</span>
                <input onChange={handleSubject} type="checkbox" name="AM-1" />
            </label>

            <label className="cursor-pointer flex gap-2">
                <span>LAB-1</span>
                <input onChange={handleSubject} type="checkbox" name="LAB-1" />
            </label>

            <label className="cursor-pointer flex gap-2">
                <span>TD</span>
                <input onChange={handleSubject} type="checkbox" name="TD" />
            </label>

            <label className="cursor-pointer flex gap-2">
                <span>IT-1</span>
                <input onChange={handleSubject} type="checkbox" name="IT-1" />
            </label>

            <label className="cursor-pointer flex gap-2">
                <span>A-1</span>
                <input onChange={handleSubject} type="checkbox" name="A-1" />
            </label>

        </div>


    )

    return (
        <Layout title={'Create Career'}>
            <section>
                <form action="" onSubmit={handleSubmit} className=" p-10">
                    <div className="grid grid-cols-2 gap-10">

                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="name..."
                                onChange={handleCareer}
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="description..."
                                onChange={handleCareer}
                            />
                            <input
                                type="text"
                                name="image"
                                placeholder="image..."
                                onChange={handleCareer}
                            />
                            <input
                                type="text"
                                name="salary"
                                placeholder="salary..."
                                onChange={handleCareer}
                            />
                        </div>

                        {/* semester */}
                        <div className="p-5 flex flex-col gap-5">
                            <input
                                type="text"
                                name="number"
                                placeholder="semester num"
                                onChange={handleSemester}
                            />

                            {/* subject */}
                            {subjectsList()}

                        </div>
                    </div>

                    <button className="bg-green-500  w-full rounded-md py-2 mt-5">
                        Create
                    </button>
                </form>
            </section>
        </Layout>
    );
};

export default create;
