"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import Image from "next/image"
import MenuItem from "./menuItem"
import { getCookies, removeCookie } from "@/lib/client-cookies"
import { useRouter } from "next/navigation";
import { BASE_IMAGE_PROFILE } from "@/global"
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import Link from "next/link"

type MenuType = {
    id: string,
    icon: ReactNode
    path: string,
    label: string
}

type CahsierProp = {
    children: ReactNode,
    id: string,
    title: string,
    menuList: MenuType[]
}

const Sidebar = ({ children, id, title, menuList }: CahsierProp) => {
    const router = useRouter();
    const userName = getCookies("name") || "Guest";
    const profilePicture = getCookies("profile_picture");
    const role = getCookies("role");

    const [isShow, setIsShow] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        removeCookie("token");
        removeCookie("id");
        removeCookie("name");
        removeCookie("role");
        removeCookie("alamat")
        removeCookie("telephone")
        router.replace(`/signIn`);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
                setIsShow(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full min-h-dvh">
            {/* Header */}
            <header className="flex justify-between items-center p-4 mb-0 bg-secondary shadow-md">
                <div className="flex ml-10">
                    <button onClick={() => setIsShow(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-white cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                    <h1 className="font-bold text-xl text-white">{title}</h1>
                </div>

                <div className="text-white p-3 flex gap-2 items-center">
                    <div className="flex flex-col">
                        <div className="text-xl font-bold">{userName}</div>
                        <div className="bg-black px-2 rounded-lg">
                            <div className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent text-xs bg-clip-text font-medium">
                                {role}
                            </div>
                        </div>
                    </div>
                    <img
                        src={`${BASE_IMAGE_PROFILE}/${profilePicture}`}
                        alt="Profile"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>
            </header>

            {/* Content */}
            <div className="relative">{children}</div>

            {/* Chat Button */}
            <Link href="/chat">
                <div className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition z-[99999]">
                    <IoChatbubbleEllipsesSharp className="w-5 h-5" />
                </div>
            </Link>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`flex flex-col w-2/3 md:w-1/2 lg:w-1/4 h-full p-5 fixed top-0 right-full transition-transform z-50 bg-primary shadow-lg shadow-black ${
                    isShow ? "translate-x-full" : ""
                }`}
            >
                <div className="flex justify-between items-center p-4 mb-0">
                    {/* Logo */}
                    <div className="mb-3 w-full flex justify-start">
                        <div className="flex flex-col items-center space-x-2">
                            <Image src="/Logosidebar.svg" alt="Logo" width={100} height={100} />
                            <p className="font-bold text-secondary text-4xl">Plantify</p>
                        </div>
                    </div>
                </div>

                {/* Menu List */}
                <div className="w-full overflow-y-auto px-5 mt-10">
                    {menuList.map((menu, index) => (
                        <MenuItem
                            key={`keyMenu${index}`}
                            icon={menu.icon}
                            label={menu.label}
                            path={menu.path}
                            active={menu.id === id}
                        />
                    ))}
                </div>

                {/* Logout */}
                <div className="absolute bottom-4 w-full p-4">
                    <div className="flex items-center space-x-2 text-[#333333] px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                        <button className="font-semibold cursor-pointer" onClick={handleLogout}>
                            Exit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
