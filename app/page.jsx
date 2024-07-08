'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import LoginPage from "./(auth)/login/page";

export default function Login() {
  const { push } = useRouter();
  function handleClick() {
      push('/dashboard')
  }
  return (
    <>
    <LoginPage />
    </>
  );
}