import { useState, createContext, useContext, useEffect } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

const UserProvider = ({ children }) => {


    const [user, setUser] = useState({})
    const [userInfo, setUserInfo] = useState({})
    const [isLogged, setIsLogged] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

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
                setUserToken(data)
                if (data) {
                    setIsLogged(true)
                } else {
                    setIsLogged(false)
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
            try {
                // if (userInfo.name) return
                const res = await fetch(`http://localhost:3000/api/user/get?email=${user.email}`)
                const data = await res.json()
                // console.log(data)
                setUserInfo(data)
            } catch (err) {
                //FIJARSE ACA
                // console.log(err)
            }
        }
        loadUser()
    }, [user])

    // console.log(userInfo)

    const setUserToken = (value) => {
        setUser(value)
    }

    return (
        <UserContext.Provider value={{ user, userInfo, setUserToken, isLoading, isLogged }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider