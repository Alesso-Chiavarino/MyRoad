import React from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CareerProgressBar from '@/components/CareerProgressBar'

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

    // console.log(career)

    return (
        <Layout title={user.username}>
            <section className='text-gray-300 container mx-auto flex gap-32 my-10'>
                <div className='w-2/5 flex flex-col items-center gap-2'>
                    <div className='h-64 w-64 border-[1px] border-[#B8BFC6] rounded-full overflow-hidden'>
                        <img className='object-cover w-full h-full' src={user?.avatar_url?.url} alt='avatar' />
                    </div>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-2xl font-bold'>{user?.name}</h3>
                        <span className='text-xl text-gray-400'>{user?.username}</span>
                    </div>
                    <p className='text-sm'>{user?.bio}</p>

                </div>
                <div className='w-full'>
                    <h3 className='font-bold mb-2'>Current career</h3>
                    <div className='flex flex-col gap-2 border-[1px] border-[#B8BFC6] rounded-md p-5'>
                        <h3 className='font-bold text-2xl'>{career?.name}</h3>
                        <hr />
                        <p>{career?.description}</p>
                            <CareerProgressBar totalApproved={totalApproved} totalSubjects={totalSubjects} />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default User