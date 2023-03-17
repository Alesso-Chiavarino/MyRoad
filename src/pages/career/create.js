import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import CareerForm from "@/components/CareerForm";
import SemestersFormList from "@/components/SemestersFormList";
import InputsSubjectList from "@/components/InputsSubjectList";

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
        if (careerName === 'Informatic Engineering') return <InputsSubjectList subjectsList={subjectsList} handleSubject={handleSubject} handleSemesterStore={handleSemesterStore} />
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
                <CareerForm handleSubmit={handleSubmit} handleCareer={handleCareer} handleCareersSubjectsForm={handleCareersSubjectsForm} subjectsListRender={subjectsListRender} handleSemester={handleSemester} semester={semester} />
                <SemestersFormList semesterListStore={semesterListStore} deleteSemester={deleteSemester} />
            </section>
        </Layout>
    );
};

export default create;

