import React from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CareerProgressBar from '@/components/CareerProgressBar'
import { BsCircleFill } from 'react-icons/bs'

const User = () => {

    const { query } = useRouter()
    const [user, setUser] = useState({})
    const [career, setCareer] = useState({})
    const [totalSubjects, setTotalSubjects] = useState(0)
    const [totalApproved, setTotalApproved] = useState(0)

    useEffect(() => {
        const loadUser = async () => {
            if (query.user) {
                const res = await fetch(`/api/user/get?username=${query.user}`)
                const data = await res.json()
                setUser(data)
            }
        }
        loadUser()
    }, [query.user])

    useEffect(() => {
        const loadCareer = async () => {
            if (user?.careers?.length > 0) {
                const res = await fetch(`/api/career/get?careerName=${user?.careers[0]}`)
                const data = await res.json()
                setCareer(data)
            }
        }
        loadCareer()
    }, [user])

    useEffect(() => {
        if (career?.semesters?.length > 0) {
            let totalSubjects = 0
            let totalApproved = 0

            career.semesters.map(sem => {
                sem.subjects.map(sub => {
                    totalSubjects += 1
                    if (sub.approved) {
                        totalApproved += 1
                    }
                })
            })

            setTotalSubjects(totalSubjects)
            setTotalApproved(totalApproved)
        }
    }, [career])

    const renderConditions = (sub) => {
        const conditionHashMap = {
            deslocked: <span className='flex items-center gap-2 text-[14px]'><BsCircleFill className='text-orange-500' />Can coursing</span>,
            locked: <span className='flex items-center gap-2 text-[14px]'><BsCircleFill className='text-gray-500' />Cannnot coursing</span>,
            approved: <span className='flex items-center gap-2 text-[14px]'><BsCircleFill className='text-green-500' />Approved</span>,
            notApproved: <span className='flex items-center gap-2 text-[14px]'><BsCircleFill className='text-red-500' />Disapproved</span>,
            regular: <span className='flex items-center gap-2 text-[14px]'><BsCircleFill className='text-yellow-500' />Regular</span>,
        }
        return conditionHashMap[sub.condition]
    }

    const renderSubjects = () => {
        if (career?.semesters?.length > 0) {
            return career.semesters[0].subjects.map((sub, i) => {
                // if (i <= 3) { //render 4 articles
                return (
                    <li key={i} className='border-[1px] border-[#B8BFC6]/70 rounded-md px-4 py-3'>
                        <article className='flex flex-col gap-3'>
                            <div className='flex justify-between items-center'>
                                <h3 className='font-bold text-[#7148FC]'>{sub?.name}</h3>
                                <span className='text-[12px] border-[1px] border-[#B8BFC6]/70 rounded-full px-2 py-[2px]'>{`${career.semesters[0].number}º semester`}</span>
                            </div>
                            <span>
                                {renderConditions(sub)}
                            </span>
                        </article>
                    </li >
                )
                // }

            })
        }
    }


    return (
        <Layout title={user.username}>
            <section className='text-gray-300 container mx-auto flex gap-32 my-10'>
                <div className='w-2/5 flex flex-col items-center gap-2'>
                    <div className='h-64 w-64 border-[1px] border-[#B8BFC6]/70 rounded-full overflow-hidden'>
                        <img className='object-cover w-full h-full' src={user?.avatar_url?.url} alt='avatar' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-2xl font-bold'>{user?.name}</h3>
                        <span className='text-xl text-gray-400'>{user?.username}</span>
                    </div>
                    <p className='text-sm'>{user?.bio}</p>

                </div>
                <div className='w-full flex flex-col gap-5'>
                    <div>
                        <h3 className='font-bold mb-2'>Current career</h3>
                        <div className='flex flex-col gap-2 border-[1px] border-[#B8BFC6]/70 rounded-md p-5'>
                            <h3 className='font-bold text-2xl'>{career?.name}</h3>
                            <hr />
                            <p>{career?.description}</p>
                            <CareerProgressBar totalApproved={totalApproved} totalSubjects={totalSubjects} />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold mb-2'>Current subjects</h3>
                        <ul className='grid grid-cols-2 gap-5'>
                            {renderSubjects()}
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default User