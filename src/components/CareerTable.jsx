import { useCareer } from "@/context/CareerContext";

const CareerTable = () => {

    const { career } = useCareer();
    let partial = 0;

    return (
        <div className="career-table">
            <table className="text-white w-full">
                <thead>
                    <tr>
                        <th className="p-3">Semester</th>
                        <th className="p-3">Subject</th>
                        <th className="p-3">Calification</th>
                    </tr>
                </thead>
                <tbody>
                    {career[0]?.semesters.map((sem) =>
                        sem.subjects.map((sub, index) => (
                            <tr className='text-white border-b border-gray-700 last:border-b-0' key={`${sem.number}-${index}`}>
                                {index === 0 && (
                                    <td rowSpan={sem.subjects.length} className="p-3 font-semibold text-lg border-r text-center border-gray-700">
                                        {sem.number}
                                    </td>
                                )}
                                <td className="p-3 border-r border-gray-700">{sub.name}</td>
                                <td className="p-3 flex gap-5">
                                    {sub.califications?.map((cal) => {
                                        // console.log(cal)
                                        if (partial === 2) {
                                            partial = 0
                                            // return;
                                        }
                                        partial++
                                        return (
                                            <span
                                                key={cal.value}
                                                className="block w-fit px-3 py-2 bg-[#171717] rounded-md"
                                            >
                                                {/* {partial}° partial: <span className="font-semibold">{cal.value}</span> */}
                                                <span className="font-semibold">{cal.name}: {cal.value}</span>
                                            </span>
                                        )

                                    })}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
};

export default CareerTable;
