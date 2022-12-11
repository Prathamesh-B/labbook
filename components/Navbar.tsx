import { useState, FC } from 'react'
import Router from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import { Burger } from '@mantine/core';
// import { showNotification } from '@mantine/notifications';
// import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
    const [opened, setOpened] = useState(false);
    const closeNav = () => setOpened(!opened)
    const handleLogout = () => {
        localStorage.removeItem('token')
        Router.push('/login')
    }
    return (
        <header className="p-4">
            <div className="flex justify-between h-16 mx-auto">
                <Link className="flex items-center p-4" href={"/"}>
                    <Image src="/logo.svg" width={125} height={125} alt="Logo Img"></Image>
                </Link>
                <div className="items-center flex-shrink-0 hidden md:flex">
                    <Link href={"/assignments"} passHref><button className="self-center m-1 px-3 py-2 hover:bg-orange-100 rounded">Assignments</button></Link>
                    <Link href={"/downloads"} passHref><button className="self-center m-1 px-3 py-2 hover:bg-orange-100 rounded">Downloads</button></Link>
                </div>
                <div className="p-4 md:hidden">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((opened) => !opened)}

                    />
                </div>

            </div>
            {opened && <div className='z-50 md:hidden bg-white w-screen h-auto absolute left-0 top-20 shadow-md p-4 items-center'>

                <>
                    <Link href={"/assignments"} passHref><button className="flex flex-col p-2 hover:bg-orange-100 rounded m-auto" onClick={closeNav}>Assignments</button></Link>
                    <Link href={"/downloads"} passHref><button className="flex flex-col p-2 hover:bg-orange-100 rounded m-auto" onClick={closeNav}>Downloads</button></Link>
                </>
            </div>}
        </header>
    )
}

export default Navbar