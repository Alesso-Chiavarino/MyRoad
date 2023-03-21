import { useEffect, useState } from "react";

const ProgressPerfilCard = ({ tasksCompleted = 100, totalTasks = 100 }) => {

    const [progressBarWidth, setProgressBarWidth] = useState(0);

    useEffect(() => {
        const progressPercent = ((tasksCompleted / totalTasks)) * 100;
        setProgressBarWidth(progressPercent);
    }, [tasksCompleted, totalTasks]);

    console.log(progressBarWidth)

    return (
        <div className="relative w-full p-4 overflow-hidden bg-white shadow-lg rounded-xl md:w-72 dark:bg-gray-800">
            <div className="block w-full h-full">
                <div className="flex items-center w-full">
                    <div className="relative block">
                        <img
                            alt="profile"
                            src=""
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                    </div>
                    <div className="flex flex-col items-center ml-2">
                        <span className="dark:text-white">Charlie Rabiller</span>
                        <span className="text-sm text-gray-400 dark:text-gray-300">
                            Tailwind-kit.com
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between my-2">
                    <p className="text-sm text-gray-300">{`${tasksCompleted}/${totalTasks} task completed`}</p>
                </div>
                <div className="w-full h-2 bg-blue-200 rounded-full">
                    <div
                        style={{ width: `${progressBarWidth}%` }} className={`h-full text-xs text-center text-white bg-blue-600 rounded-full`}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressPerfilCard;
