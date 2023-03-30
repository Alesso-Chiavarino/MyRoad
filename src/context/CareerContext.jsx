import { useState, createContext, useContext, useEffect } from 'react'
import { useUser } from './UserContext'

const CareerContext = createContext()

export const useCareer = () => useContext(CareerContext)

const CareerProvider = ({ children }) => {

    const [career, setCareer] = useState({})
    const { isLogged } = useUser()

    useEffect(() => {
        if (isLogged) {
            const loadCareer = async () => {
                try {
                    const res = await fetch('http://localhost:3000/api/career/get')
                    const data = await res.json()
                    setCareer(data)
                } catch (err) {
                    console.log(err)
                }
            }
            loadCareer()
        } else {
            setCareer({})
        }

    }, [isLogged])

    // console.log(career)

    return (
        <CareerContext.Provider value={{ career }}>
            {children}
        </CareerContext.Provider>
    )
}

export default CareerProvider