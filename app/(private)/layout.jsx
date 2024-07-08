'use client';
import Link from 'next/link';
import React from 'react'
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard | Time Stuff Admin",
  description: "Employee tracker Admin Panel"
};

export default function RootLayout({ children }) {

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    }
  });

  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="p-2 sm:ml-64 mt-14">
        {children}
      </div>
    </div>
  );
}