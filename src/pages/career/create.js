import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import CareerForm from "@/components/CareerForm";
import SemestersFormList from "@/components/SemestersFormList";
import InputsSubjectList from "@/components/InputsSubjectList";
import careerSubjects from "@/data/subjects";

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
    }

    const handleSubject = async (e) => {
        if (e.target.checked) {
            console.log(e.target.value)
            setSubjects([
                ...subjects,
                {
                    name: e.target.name,
                    duration: e.target.value,
                }
            ]);
            setSemester({
                ...semester,
                subjects,
            });

            const newListSubjects = subjectsList?.map(sub => {
                if (sub.code === e.target.name) {
                    return {
                        ...sub,
                        checked: true
                    }
                }
                return sub
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

    const filteredCareerSubjects = careerSubjects.find(career => career.name === careerName)?.semesters?.find(sem => sem.number === Number(semester?.number))?.subjects

    const [subjectsList, setSubjectsList] = useState([]);

    useEffect(() => {
        if (careerName === 'Informatic Engineering') {
            setSubjectsList(filteredCareerSubjects)

        }
    }, [semester.number, careerName])


    return (
        <Layout title='Create Career'>
            <section className="container mx-auto flex justify-center mt-20 gap-20">
                <CareerForm handleSubmit={handleSubmit} handleCareer={handleCareer} handleCareersSubjectsForm={handleCareersSubjectsForm} subjectsListRender={subjectsListRender} handleSemester={handleSemester} semester={semester} />
                <SemestersFormList semesterListStore={semesterListStore} deleteSemester={deleteSemester} />
            </section>
        </Layout>
    );
};

export default create;

