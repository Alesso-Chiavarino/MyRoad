import { useEffect, useState } from 'react'

const CareerProgressBar = ({ totalApproved, totalSubjects }) => {

    const [progressBarWidth, setProgressBarWidth] = useState(0);

    useEffect(() => {
        const progressPercent = ((totalApproved / totalSubjects)) * 100;
        setProgressBarWidth(progressPercent);
    }, [totalApproved, totalSubjects]);

    return (
        <>
            <div className="flex items-center mt-3 justify-between my-2">
                <p className="text-sm text-gray-300">{`${totalApproved}/${totalSubjects} approved subjects`}</p>
            </div>
            <div className="w-full h-2 bg-[#7148FC]/30 rounded-full">
                <div
                    style={{ width: `${progressBarWidth}%` }} className={`h-full text-xs text-center text-white bg-[#7148FC] rounded-full`}
                ></div>
            </div>
        </>
    )
}

export default CareerProgressBar