import { useState, createContext, useContext, useEffect } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

const UserProvider = ({ children }) => {


    const [user, setUser] = useState({})
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        const loadUser = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/user/get?email=${user.email}`)
                const data = await res.json()
                console.log(data)
                setUserInfo(data)
            } catch (err) {
                console.log(err)
            }
        }
        loadUser()
    }, [user])

    const setUserToken = (value) => {
        setUser(value)
    }

    return (
        <UserContext.Provider value={{ user, userInfo, setUserToken }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider