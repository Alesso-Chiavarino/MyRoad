import { useState, useEffect } from "react";

const career = () => {

    const [career, setCareer] = useState([])

    useEffect(() => {
        const loadCareer = async () => {
            const res = await fetch('/api/career/get')
            const data = await res.json()
            setCareer(data)
        }
        loadCareer()
    }, [])

    return (
        <div>
            {career.map(car => {
                return (
                    <div key={car._id}>
                        <h1>{car.name}</h1>
                        <p>{car.description}</p>
                        <span>{car.salary}</span>
                        <span>semesters:</span>
                        {car.semesters.map(sem => {
                            return (
                                <div key={sem._id}>
                                    <span>{sem.number}</span>
                                    <span>subjects:</span>
                                    {sem.subjects.map(sub => {
                                        return (
                                            <div key={sub._id}>
                                                <span>{sub.name}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default career