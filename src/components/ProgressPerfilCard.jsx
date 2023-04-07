import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";

const ProgressPerfilCard = ({ totalSubjects, totalApproved, career }) => {

    const { user, userInfo } = useUser()

    const [progressBarWidth, setProgressBarWidth] = useState(0);

    useEffect(() => {
        const progressPercent = ((totalApproved / totalSubjects)) * 100;
        setProgressBarWidth(progressPercent);
    }, [totalApproved, totalSubjects]);

    return (
        <div className="relative w-full p-4 overflow-hidden shadow-lg rounded-xl bg-[#111111]">
            <div className="block w-full h-full">
                <div className="flex items-center w-full">
                    <div className="relative block">
                        <img
                            alt="profile"
                            src={userInfo?.avatar_url?.url}
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                    </div>
                    <div className="flex flex-col justify-center ml-2">
                        <span className="text-white font-semibold">{userInfo.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-300">{career[0]?.name}</span>
                    </div>
                </div>
                <div className="flex items-center mt-3 justify-between my-2">
                    <p className="text-sm text-gray-300">{`${totalApproved}/${totalSubjects} approved subjects`}</p>
                </div>
                <div className="w-full h-2 bg-[#7148FC]/30 rounded-full">
                    <div
                        style={{ width: `${progressBarWidth}%` }} className={`h-full text-xs text-center text-white bg-[#7148FC] rounded-full`}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressPerfilCard;
