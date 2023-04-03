import Link from "next/link"

const AccountDropdown = ({ handleDropdownLeave, handleLogout }) => {
    return (
        <div onMouseLeave={handleDropdownLeave} className='bg-[#111111] h-fit text-sm w-[250px] rounded-md text-[#D6DEE7] pt-[68px] pb-4 px-6 gap-5 z-20 right-0 top-0 fixed flex flex-col border-[0.5px] border-white/20'>
            <hr />
            <Link href="#" className="hover:text-white">Account</Link>
            <Link href="/settings/profile" className="hover:text-white">Settings</Link>
            <Link href="#" className="hover:text-white">Help</Link>
            <Link href="#" className="hover:text-white" onClick={handleLogout}>Log Out</Link>
        </div>
    )
}

export default AccountDropdown