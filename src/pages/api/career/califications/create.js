import Career from '@/models/Career'

const createCalification = async (req, res) => {
    const { semester, calification, subject } = req.body;
    const { id } = req.query;

    const career = await Career.findById(id);

    // console.log(career)

    const updatedCareer = career.semesters.map(sem => {
        if (sem.number === semester.number) {
            sem.subjects.map(sub => {
                if (sub.name === subject) {
                    sub.califications.push({
                        value: calification,
                        name: subject,
                        condition: calification >= 4 && 'aprobed' || 'reprobated'
                    })
                }
            })
            return sem;
        }
        return sem;
    })

    const newCareer = await Career.findByIdAndUpdate(id, { semesters: updatedCareer }, { new: true });

    console.log(newCareer)

    res.status(200).json(newCareer);
}

export default createCalification