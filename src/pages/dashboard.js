import Bump from '@/components/Bump'
import CalificationForm from '@/components/CalificationForm'
import CareerTable from '@/components/CareerTable'
import Layout from '@/components/Layout'
import Pie from '@/components/Pie'
import ProgressPerfilCard from '@/components/ProgressPerfilCard'
import AvatarForm from '@/components/avatarForm'
import { useCareer } from '@/context/CareerContext'
import { useEffect, useState } from 'react'


//sacarrrr
import axios from 'axios'

const dashboard = () => {

    const { career } = useCareer()
    const [dataPie, setDataPie] = useState([])
    const [totalApproved, setTotalApproved] = useState(0)
    const [totalSubjects, setTotalSubjects] = useState(0)
    const [semester, setSemester] = useState(1)

    useEffect(() => {
        let totalSubjects = 0;
        let totalApproved = 0;

        if (career[0]) {
            if (semester) {
                const data = career[0].semesters[semester - 1]?.subjects?.map(sub => {
                    return {
                        id: sub.name,
                        label: sub.name,
                        value: sub.duration,
                        color: 'hsl(215, 70%, 50%)'
                    }
                })
                setDataPie(data)
            }

            career[0].semesters.map(sem => {
                sem.subjects.map(sub => {
                    totalSubjects += 1;
                    if (sub.approved) {
                        totalApproved += 1;
                    }
                })
            })

            setTotalSubjects(totalSubjects)
            setTotalApproved(totalApproved)
        }
    }, [career, semester])

    const handleSemester = (e) => {
        setSemester(e.target.value)
    }


    const [dataBump, setDataBump] = useState([])

    useEffect(() => {
        const bumpDataa = [];

        if (career.length > 0) {
            career[0].semesters[1]?.subjects.map((subject) => {
                const subjectId = subject.name;
                const subjectData = [];

                subject?.califications.map((calification) => {
                    const calificationData = {
                        x: calification.name,
                        y: calification.value
                    };
                    subjectData?.push(calificationData);
                });

                const existingSubject = bumpDataa.find((bumpSubject) => bumpSubject.id === subjectId);

                if (existingSubject) {
                    existingSubject.data.push(...subjectData);
                } else {
                    bumpDataa.push({
                        id: subjectId,
                        data: subjectData
                    });
                }
            });
        }

        setDataBump(bumpDataa);
    }, [career, semester]);

    const [file, setFile] = useState(null)
    const [image, setImage] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    useEffect(() => {
        const postImage = async () => {
            if (image && isLoading === false) {
                console.log('ta')
                console.log(image)
                try {
                    const res = await axios.post('/api/auth/postAvatar', { image })
                    console.log(res)
                } catch (err) {
                    console.log(err)
                }
            }
        }
        postImage()
    }, [image, isLoading])

    const mandate = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const formData = new FormData()
            formData.append('file', file)
            formData.append('upload_preset', 'myroad')
            const res = await axios.post('https://api.cloudinary.com/v1_1/dotaebdx8/image/upload', formData)
            console.log(res.data)
            setImage(res.data)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setIsLoading(false)
        }

    }

    return (
        <Layout title='Dashboard'>
            <div className='container mx-auto pb-10'>
                <div className='flex justify-between items-center my-5'>
                    <h1 className='text-4xl text-white font-bold'>Overview</h1>
                    <div>
                        <select className="block px-3 py-2 text-[#D6DEE7] font-medium bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 cursor-pointer" onChange={handleSemester} name="Semesters" id="">
                            {/* <option value="">Select a semester</option> */}
                            {career[0]?.semesters.map(sem => {
                                return (
                                    <option key={sem.number} value={sem.number}>{sem.number}° semester</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-20'>
                    <ProgressPerfilCard totalApproved={totalApproved} totalSubjects={totalSubjects} />
                    <ProgressPerfilCard totalApproved={totalApproved} totalSubjects={totalSubjects} />
                    <ProgressPerfilCard totalApproved={totalApproved} totalSubjects={totalSubjects} />
                </div>
                <div className='my-10 items-center grid grid-cols-2 gap-10'>
                    <div className='bg-[#111111] rounded-xl p-5'>
                        <span className='text-gray-50 font-semibold'>Workload</span>
                        <Pie dataPie={dataPie} />
                    </div>
                    <div className='bg-[#111111] rounded-xl p-5'>
                        <span className='text-gray-50 font-semibold'>Recent Califications</span>
                        <Bump dataBump={dataBump} />
                    </div>
                </div>
                <div className='bg-[#111111] rounded-xl'>
                    <CareerTable semester={semester} />
                </div>
                {/* <CalificationForm /> */}
                <form onSubmit={mandate}>

                    <input onChange={handleFile} type="file" name="file" />
                    <button>Submit</button>
                </form>
            </div>
        </Layout>
    )
}

export default dashboard










// const dataBump2 = [
//         {
//             "id": "AM-1",
//             "data": [
//                 {
//                     "x": '1º PARTIAL',
//                     "y": 2
//                 },
//                 {
//                     "x": '2º PARTIAL',
//                     "y": 4
//                 },
//                 {
//                     "x": '3º PARTIAL',
//                     "y": 8
//                 },
//                 {
//                     "x": 'FINAL',
//                     "y": 10
//                 },
//             ]
//         },
//         {
//             "id": "LAB-1",
//             "data": [
//                 {
//                     "x": '1º PARTIAL',
//                     "y": 8
//                 },
//                 {
//                     "x": '2º PARTIAL',
//                     "y": 1
//                 },
//                 {
//                     "x": '3º PARTIAL',
//                     "y": 10
//                 },
//                 {
//                     "x": 'FINAL',
//                     "y": 10
//                 },
//             ]
//         },
//         {
//             "id": "A-1",
//             "data": [
//                 {
//                     "x": '1º PARTIAL',
//                     "y": 9
//                 },
//                 {
//                     "x": '2º PARTIAL',
//                     "y": 10
//                 },
//                 {
//                     "x": '3º PARTIAL',
//                     "y": 9
//                 },
//                 {
//                     "x": 'FINAL',
//                     "y": 5
//                 },
//             ]
//         },
//         {
//             "id": "IT-1",
//             "data": [
//                 {
//                     "x": '1º PARTIAL',
//                     "y": 10
//                 },
//                 {
//                     "x": '2º PARTIAL',
//                     "y": 7
//                 },
//                 {
//                     "x": '3º PARTIAL',
//                     "y": 1
//                 },
//                 {
//                     "x": 'FINAL',
//                     "y": 7
//                 },
//             ]
//         },
//         {
//             "id": "TD",
//             "data": [
//                 {
//                     "x": '1º PARTIAL',
//                     "y": 2
//                 },
//                 {
//                     "x": '2º PARTIAL',
//                     "y": 8
//                 },
//                 {
//                     "x": '3º PARTIAL',
//                     "y": 10
//                 },
//                 {
//                     "x": 'FINAL',
//                     "y": 6
//                 },
//             ]
//         },
//     ]