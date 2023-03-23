import Career from '../../../../models/Career';

const updateCalification = async (req, res) => {

    const { semester, subject } = req.body;

    const { id } = req.query;

    const career = await Career.findById(id);

    const updatedCareer = career.semesters.map(sem => {
        if (sem.number === semester.number) {
            sem.subjects.map(sub => {
                if (sub.name === subject) {
                    return sub.approved = true
                }
            })
            return sem;
        }
        return sem;
    })

    console.log(updatedCareer)

    const newCareer = await Career.findByIdAndUpdate(id, { semesters: updatedCareer }, { new: true });

    return res.json(newCareer)


}

export default updateCalification