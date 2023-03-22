import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";

const ProgressPerfilCard = ({ tasksCompleted = 10, totalTasks = 100 }) => {

    const { user, userInfo } = useUser()

    const [progressBarWidth, setProgressBarWidth] = useState(0);

    useEffect(() => {
        const progressPercent = ((tasksCompleted / totalTasks)) * 100;
        setProgressBarWidth(progressPercent);
    }, [tasksCompleted, totalTasks]);

    // console.log(progressBarWidth)

    // console.log(userInfo)

    return (
        // <div className="bg-[#7148FC] p-[1px] rounded-xl">
            <div className="relative w-full p-4 overflow-hidden shadow-lg rounded-xl bg-[#111111]">
                <div className="block w-full h-full">
                    <div className="flex items-center w-full">
                        <div className="relative block">
                            <img
                                alt="profile"
                                src={`https://robohash.org/${user?.email}`}
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                            <span className="text-white font-semibold">{userInfo.name}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-300">
                                Informatic Engineering
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center mt-3 justify-between my-2">
                        <p className="text-sm text-gray-300">{`${tasksCompleted}/${totalTasks} approved subjects`}</p>
                    </div>
                    <div className="w-full h-2 bg-[#7148FC]/30 rounded-full">
                        <div
                            style={{ width: `${progressBarWidth}%` }} className={`h-full text-xs text-center text-white bg-[#7148FC] rounded-full`}
                        ></div>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default ProgressPerfilCard;
