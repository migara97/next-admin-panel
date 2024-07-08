'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { initFlowbite } from 'flowbite';

export default function FlowbiteSidebar() {
    const [activeLink, setActiveLink] = useState('');
    const pathname = usePathname();
    useEffect(() => {
        //get current url path
        setActiveLink(pathname);
        //init flowbite
        initFlowbite();
    }, [pathname]);
    return (
        <>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li className={`${activeLink === '/dashboard' ? 'bg-gray-100 rounded-lg text-gray-900' : 'bg-white text-gray-900'}`}>
                            <Link href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className={`w-6 h-6 transition duration-75 ${activeLink === '/dashboard' ? 'text-gray-900' : 'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className={`py-1 ${activeLink === '/management' ? 'text-black ml-3' : 'ml-3'}`}>Dashboard</span>
                            </Link>
                        </li>
                        <li className={`${activeLink === '/management' ? 'bg-gray-100 rounded-lg text-gray-900' : 'bg-white text-gray-900'}`}>
                            <Link href="/management" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className={`w-6 h-6 transition duration-75 ${activeLink === '/management' ? 'text-gray-900' : 'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" clipRule="evenodd"></path></svg>
                                <span className={`py-1 ${activeLink === '/management' ? 'text-black ml-3' : 'ml-3'}`}>Management</span>
                            </Link>
                        </li>
                        <li className="">
                            <button type="button" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg aria-hidden="true" className={`w-6 h-6 transition duration-75 ${activeLink === '/employee/list' ? 'text-gray-900' : 'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" clipRule="evenodd"></path></svg>
                                <span className="py-1  flex-1 ml-3 text-left whitespace-nowrap" >Organizations</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                            <ul id="dropdown-example" className="hidden py-1 space-y-2">
                                <li className={`${activeLink === '/organization' ? 'bg-gray-100 rounded-lg text-gray-900' : 'bg-white text-gray-900'}`}>
                                    <Link href="/organization" className={` ${activeLink === '/organization' ? 'text-black ' : ''} flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`} >
                                        Organization
                                    </Link>
                                </li>
                                <li className={`${activeLink === '/employee/list' ? 'bg-gray-100 rounded-lg text-gray-900' : 'bg-white text-gray-900'}`}>
                                    <Link href="/employee/list" className={` ${activeLink === '/employee/list' ? 'text-black ' : ''} flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`} >
                                        Employee List
                                    </Link>
                                </li>
                                <li className={`${activeLink === '/employee/task' ? 'bg-gray-100 rounded-lg text-gray-900' : 'bg-white text-gray-900'}`}>
                                    <Link href="/employee/task" className={` ${activeLink === '/employee/task' ? 'text-black ' : ''} flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`} >
                                        Task List
                                    </Link>
                                </li>
                                <li className={`py-1 ${activeLink === '/employee/management' ? 'bg-gray-100 rounded-lg text-gray-900' : 'bg-white text-gray-900'}`}>
                                    <Link href="/employee/management" className={` ${activeLink === '/employee/management' ? 'text-black ' : ''} flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`} >
                                        Management
                                    </Link>
                                </li>
                                <li className={`py-1 ${activeLink === '/employee/setting' ? 'bg-gray-100 rounded-lg text-gray-900' : 'bg-white text-gray-900'}`}>
                                    <Link href="/employee/setting" className={` ${activeLink === '/employee/setting' ? 'text-black ' : ''} flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`} >
                                        Setting
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`${activeLink === '/setting' ? 'bg-gray-100 rounded-lg text-gray-900' : 'bg-white text-gray-900'}`}>
                            <Link href="/setting" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" fill="none" stroke="currentColor" className={`w-6 h-6 transition duration-75 ${activeLink === '/setting' ? 'text-gray-900' : 'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className={`py-1 ${activeLink === '/setting' ? 'text-black ml-3' : 'ml-3'}`}>Setting</span>
                            </Link>
                        </li>
                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example1" data-collapse-toggle="dropdown-example1">
                                <svg className={`w-6 h-6 transition duration-75 ${activeLink === 'payment/*' ? 'text-gray-900' : 'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 drak:group-hover:text-white`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"></path>
                                </svg>
                                <span className="py-1  flex-1 ml-3 text-left whitespace-nowrap" >Payment</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                            <ul id="dropdown-example1" className="hidden py-1 space-y-2">
                                <li className={`${activeLink === '/payment/payamentDetails' ? 'bg-gray-100 rounded-lg text-gray-900' : 'bg-white text-gray-900'}`}>
                                    <Link href="/payment/payamentDetails" className={` ${activeLink === '/payment/payamentDetails' ? 'text-black ' : ''} flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`} >
                                        Payament Details
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    );
}