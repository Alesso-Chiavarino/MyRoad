import Layout from '@/components/Layout'
import React from 'react'
import { useRouter } from 'next/router'
import Profile from '@/components/settings/Profile'
import Account from '@/components/settings/Account'
import Career from '@/components/settings/Career'
import { useUser } from '@/context/UserContext'
import Link from 'next/link'
import { MdAccountCircle, MdSettings } from 'react-icons/md'
import { IoSchool } from 'react-icons/io5'

const option = () => {

    const router = useRouter()

    const { user, userInfo, handleLogout, handleActivateEffect, activateEffect } = useUser()

    const { option } = router.query

    const optionsHashmap = {
        profile: <Profile userInfo={userInfo} handleActivateEffect={handleActivateEffect} activateEffect={activateEffect} />,
        account: <Account user={user} userInfo={userInfo} handleLogout={handleLogout} />,
        career: <Career />
    }

    const renderMain = () => {
        if (optionsHashmap[option]) {
            return optionsHashmap[option]
        }
        return (
            <div>
                <h1>Option not found</h1>
            </div>
        )
    }

    return (
        <Layout title='Settings'>
            <section className='container mx-auto text-white'>
                <div className='flex justify-between items-center my-10'>
                    <div className='flex gap-2 w-fit items-center'>
                        <img src={userInfo.avatar_url} alt='user profile image' className={`cursor-pointer mx-auto object-cover border-[1px] border-gray-100/70' rounded-full h-11 w-11 z-40`} />
                        <div className='flex flex-col'>
                            <a href="#" className='font-bold text-lg'>{userInfo.name}</a>
                            <span className='text-gray-300'>Your personal account</span>
                        </div>
                    </div>
                    <a href="#" className='border-[1px] border-gray-300 rounded-md px-2 py-1 text-gray-300 text-sm hover:bg-white hover:border-transparent hover:text-black'>Go to your personal profile</a>
                </div>
                <div className='flex gap-20'>
                    <aside className='w-2/5 h-fit flex flex-col gap-2 text-gray-300'>
                        <Link href="/settings/profile" className={`flex gap-2 items-center hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white rounded-md px-2 py-1 ${option === 'profile' && 'bg-[#B8BFC6] bg-opacity-10 text-white'}`}> <MdAccountCircle />Profile</Link>

                        <Link href="/settings/account" className={`flex gap-2 items-center hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white rounded-md px-2 py-1 ${option === 'account' && 'bg-[#B8BFC6] bg-opacity-10 text-white'}`}><MdSettings />Account</Link>

                        <Link href="/settings/career" className={`flex gap-2 items-center hover:bg-[#B8BFC6] hover:bg-opacity-10 hover:text-white rounded-md px-2 py-1 ${option === 'career' && 'bg-[#B8BFC6] bg-opacity-10 text-white'}`}><IoSchool />Career</Link>
                    </aside>
                    <div className='w-full'>
                        {renderMain()}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default option