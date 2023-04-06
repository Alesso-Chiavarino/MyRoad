import { useState, createContext, useContext, useEffect } from 'react'
import axios from 'axios'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [userInfo, setUserInfo] = useState({})
    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [activateEffect, setActivateEffect] = useState(false)

    const setUserToken = (value) => {
        setUser(value)
    }

    const handleIsLoged = async (value) => {
        setIsLogged(value)
    }

    const handleLogout = async () => {
        const res = await axios.post('http://localhost:3000/api/auth/logout')
        if (res.status === 200) {
            location.href = '/auth/login'
            // handleIsLoged(false) al pedo (creo)
        }
    }

    const handleActivateEffect = () => {
        setActivateEffect(!activateEffect)
    }

    useEffect(() => {

        const loadToken = async () => {
            try {
                if (user) {
                    if (user?.email?.length > 1) {
                        return setIsLogged(true)
                    }
                }

                const res = await fetch('http://localhost:3000/api/auth/token')
                const data = await res.json()
                // console.log(data)
                if (data.message !== 'Unauthorized') {
                    setIsLogged(true)
                    return setUserToken(data)
                }

            } catch (err) {
                console.log(err)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadToken()
    }, [activateEffect, isLoading, isLogged])

    useEffect(() => {
        const loadUserInfo = async () => {
            if (isLogged) {
                const res2 = await fetch(`http://localhost:3000/api/user/get?email=${user.email}`)
                const data2 = await res2.json()
                setUserInfo(data2)
            }
        }
        loadUserInfo()
    }, [isLogged, user, activateEffect])


    return (
        <UserContext.Provider value={{ user, userInfo, activateEffect, setUserToken, isLoading, isLogged, handleIsLoged, handleLogout, handleActivateEffect }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider