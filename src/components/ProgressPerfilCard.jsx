import { useUser } from "@/context/UserContext";
import CareerProgressBar from "./CareerProgressBar";

const ProgressPerfilCard = ({ totalSubjects, totalApproved, career }) => {

    const { userInfo } = useUser()

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
                <CareerProgressBar totalSubjects={totalSubjects} totalApproved={totalApproved} />
            </div>
        </div>
    );
};

export default ProgressPerfilCard;
