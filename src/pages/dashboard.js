import Bump from '@/components/Bump'
import CalificationForm from '@/components/CalificationForm'
import CareerTable from '@/components/CareerTable'
import Layout from '@/components/Layout'
import Pie from '@/components/Pie'
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

    // useEffect(() => {
    //     if (career[0]) {
    //         const data = career[0]?.semesters[0]?.subjects.map(sub => {
    //             return {
    //                 id: sub.name,
    //                 data: [
    //                     sub.califications?.map(cal => {
    //                         return {
    //                             x: sub.name,
    //                             y: cal.value
    //                         }
    //                     })
    //                 ]
    //             }
    //         })
    //         setDataBump(data)
    //     }
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


    return (
        <Layout>
            <div>
                <h1 className='text-2xl text-white font-bold'>Dashboard</h1>
                <CareerTable />
                <CalificationForm />
                <div className='my-10 grid grid-cols-2 gap-10'>
                    {/* <div className='my-10'> */}
                    <Pie dataPie={dataPie} />
                    <Bump dataBump={dataBump} />
                </div>
            </div>
        </Layout>
    )
}

export default dashboard