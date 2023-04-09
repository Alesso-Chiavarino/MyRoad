import { useState, createContext, useContext, useEffect } from 'react'
import { useUser } from './UserContext'
import axios from 'axios'
import { renderToast } from '@/utils/toast'

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

    const deleteCareer = async () => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/career/delete?id=${career[0]._id}`)
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            renderToast('Career deleted successfully')
        }
    }

    return (
        <CareerContext.Provider value={{ career, deleteCareer }}>
            {children}
        </CareerContext.Provider>
    )
}

export default CareerProvider