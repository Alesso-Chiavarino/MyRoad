import { useCareer } from "@/context/CareerContext";

const CareerTable = () => {

    const { career } = useCareer();

    return (
        <div className="career-table">
            <table className="bg-gray-800 text-white">
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
                            <tr className="text-white border-b border-gray-700" key={`${sem.number}-${index}`}>
                                {index === 0 && (
                                    <td rowSpan={sem.subjects.length} className="p-3 border-r border-gray-700">
                                        {sem.number}
                                    </td>
                                )}
                                <td className="p-3 border-r border-gray-700">{sub.name}</td>
                                <td className="p-3">
                                    {sub.califications?.map((cal) => (
                                        <span
                                            key={cal.value}
                                            className="block px-3 py-2 bg-gray-700 rounded-md"
                                        >
                                            {cal.value}
                                        </span>
                                    ))}
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
