import Bump from '@/components/Bump'
import CalificationForm from '@/components/CalificationForm'
import CareerTable from '@/components/CareerTable'
import Layout from '@/components/Layout'
import Pie from '@/components/Pie'
import ProgressPerfilCard from '@/components/ProgressPerfilCard'
import { useCareer } from '@/context/CareerContext'
import { useEffect, useState } from 'react'

const dashboard = () => {

    const { career } = useCareer()
    const [dataPie, setDataPie] = useState([])

    useEffect(() => {
        if (career[0]) {
            const data = career[0].semesters[0].subjects.map(sub => {
                return {
                    id: sub.name,
                    label: sub.name,
                    value: sub.duration,
                    color: 'hsl(215, 70%, 50%)'
                }
            })
            setDataPie(data)
        }
    }, [career])

    // const [dataBump, setDataBump] = useState([])

    // use effect and map career to get data for bump chart
    // useEffect(() => {
    //     // function mapDataToBump(data) {
    //     const bumpDataa = [];

    //     if (career[0]) {
    //         career[0].semesters.forEach((semester) => {
    //             semester.subjects.forEach((subject) => {
    //                 const subjectId = subject.name;
    //                 const subjectData = {
    //                     x: `partial ${subject.califications.length}`,
    //                     y: subject.califications.reduce((acc, calification) => acc + calification.value, 0) / subject.califications.length
    //                 };

    //                 const existingSubject = bumpDataa.find((bumpSubject) => bumpSubject.id === subjectId);
    //                 if (existingSubject) {
    //                     existingSubject.data.push(subjectData);
    //                 } else {
    //                     bumpDataa.push({
    //                         id: subjectId,
    //                         data: [subjectData]
    //                     });
    //                 }
    //             });
    //         });
    //     }

    //     setDataBump(bumpDataa)

    //     // return bumpData;
    //     // }
    //     // mapDataToBump()

    // }, [career])





    const dataBump = [
        {
            "id": "AM-1",
            "data": [
                {
                    "x": '1º PARTIAL',
                    "y": 2
                },
                {
                    "x": '2º PARTIAL',
                    "y": 4
                },
                {
                    "x": '3º PARTIAL',
                    "y": 8
                },
                {
                    "x": 'FINAL',
                    "y": 10
                },
            ]
        },
        {
            "id": "LAB-1",
            "data": [
                {
                    "x": '1º PARTIAL',
                    "y": 8
                },
                {
                    "x": '2º PARTIAL',
                    "y": 1
                },
                {
                    "x": '3º PARTIAL',
                    "y": 10
                },
                {
                    "x": 'FINAL',
                    "y": 10
                },
            ]
        },
        {
            "id": "A-1",
            "data": [
                {
                    "x": '1º PARTIAL',
                    "y": 9
                },
                {
                    "x": '2º PARTIAL',
                    "y": 10
                },
                {
                    "x": '3º PARTIAL',
                    "y": 9
                },
                {
                    "x": 'FINAL',
                    "y": 5
                },
            ]
        },
        {
            "id": "IT-1",
            "data": [
                {
                    "x": '1º PARTIAL',
                    "y": 10
                },
                {
                    "x": '2º PARTIAL',
                    "y": 7
                },
                {
                    "x": '3º PARTIAL',
                    "y": 1
                },
                {
                    "x": 'FINAL',
                    "y": 7
                },
            ]
        },
        {
            "id": "TD",
            "data": [
                {
                    "x": '1º PARTIAL',
                    "y": 2
                },
                {
                    "x": '2º PARTIAL',
                    "y": 8
                },
                {
                    "x": '3º PARTIAL',
                    "y": 10
                },
                {
                    "x": 'FINAL',
                    "y": 6
                },
            ]
        },
    ]

    // console.log('DATA BUMP: ', dataBump)
    // console.log(dataBump2)


    return (
        <Layout title='Dashboard'>
            <div className='container mx-auto pb-10'>
                <h1 className='text-4xl text-white font-bold my-5'>Overview</h1>
                <div className='grid grid-cols-3 gap-20'>
                    <ProgressPerfilCard />
                    <ProgressPerfilCard />
                    <ProgressPerfilCard />
                </div>
                <div className='my-10 items-center grid grid-cols-2 gap-10'>
                    <div className='bg-[#111111] rounded-xl p-5'>
                        <span className='text-gray-50 font-semibold'>Workload</span>
                        <Pie dataPie={dataPie} />
                    </div>
                    <div className='bg-[#111111] rounded-xl p-5'>
                        <span className='text-gray-50 font-semibold'>Recent Calcifications</span>
                        <Bump dataBump={dataBump} />
                    </div>
                </div>
                <div className='bg-[#111111] rounded-xl'>
                    <CareerTable />
                </div>
                <CalificationForm />
            </div>
        </Layout>
    )
}

export default dashboard