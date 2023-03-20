import { useState, createContext, useContext } from 'react'
const UserContext = createContext()

export const useUser = () => useContext(UserContext)

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const setUserToken = (value) => {
        setUser(value)
    }

    return (
        <UserContext.Provider value={{ user, setUserToken }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider