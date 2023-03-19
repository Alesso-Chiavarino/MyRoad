import { useState, createContext, useContext, useEffect } from 'react'

const CareerContext = createContext()

export const useCareer = () => useContext(CareerContext)

const CareerProvider = ({ children }) => {

    const [career, setCareer] = useState({})

    useEffect(() => {
        const loadCareer = async () => {
            const res = await fetch('http://localhost:3000/api/career/get')
            const data = await res.json()
            setCareer(data)
        }

        // if (career.length === 0) loadCareer()
        loadCareer()

    }, [])

    // console.log(career)

    return (
        <CareerContext.Provider value={{ career }}>
            {children}
        </CareerContext.Provider>
    )
}

export default CareerProvider