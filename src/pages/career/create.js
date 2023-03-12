import { useState, useEffect } from 'react'
import axios from 'axios'

const create = () => {

    const [career, setCareer] = useState({
        name: '',
        description: '',
        image: '',
        salary: '',
        semesters: [
            {
                number: '',
                subjects: [
                    {
                        name: '',
                        description: ''
                    }
                ]
            }
        ]
    })

    const [subject, setSubject] = useState({
        name: '',
        description: ''
    })

    const [semester, setSemester] = useState({
        number: '',
        subjects: [
            {
                name: '',
                description: ''
            }
        ]
    })

    const handleCareer = async (e) => {
        setCareer({
            ...career,
            [e.target.name]: e.target.value,
            semesters: [semester]
        })
    }

    const handleSemester = async (e) => {
        setSemester({
            ...semester,
            [e.target.name]: e.target.value,
            subjects: [subject]
        })
    }

    const handleSubject = async (e) => {
        setSubject({
            ...subject,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // console.log(career)
            const res = await axios.post('/api/career/create', career)
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        setSemester({
            ...semester,
            subjects: [subject]
        })
        setCareer({
            ...career,
            semesters: [semester]
        })
    }, [subject])

    return (
        <section>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='name...' onChange={handleCareer} />
                <input type="text" name='description' placeholder='description...' onChange={handleCareer} />
                <input type="text" name='image' placeholder='image...' onChange={handleCareer} />
                <input type="text" name='salary' placeholder='salary...' onChange={handleCareer} />
                <hr className='my-10' />

                {/* semester */}
                <input type="text" name='number' placeholder='semester num' onChange={handleSemester} />


                {/* subject */}
                <input type="text" name='name' placeholder='name subject' onChange={handleSubject} />
                <input type="text" name='description' placeholder='description subject' onChange={handleSubject} />


                <button>Create</button>
            </form>
        </section>
    )
}

export default create