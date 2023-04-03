import { useState, createContext, useContext, useEffect } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [userInfo, setUserInfo] = useState({})
    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const setUserToken = (value) => {
        setUser(value)
    }

    const handleIsLoged = async (value) => {
        setIsLogged(value)
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
    }, [])

    useEffect(() => {
        const loadUser = async () => {
            // console.log(user)
            try {
                if (user && user.email && !userInfo.email) {
                    const res = await fetch(`http://localhost:3000/api/user/get?email=${user.email}`)
                    const data = await res.json()
                    setUserInfo(data)
                }
            } catch (err) {
                console.log(err)
            }
        }
        loadUser()
    }, [user, userInfo])
    

    return (
        <UserContext.Provider value={{ user, userInfo, setUserToken, isLoading, isLogged, handleIsLoged }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider