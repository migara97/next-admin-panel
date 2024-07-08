"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Register() {

  const { status } = useSession({ required: false });

  const [email, setEmail] = useState(false);
  const [registed, setRegisted] = useState(false);

  if (status === "authenticated") {
    redirect("/dashboard");
  }

  useEffect(() => {
    if (registed) {
      redirect(`/register/verify?email=${email}`);
    }
  }, [registed]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirm_password = e.target.confirm_password.value;

      if (email && password) {
        const res = await axios.post(`${process.env.API_URL}/user/register`, {
          name: name,
          email: email,
          password: password,
          confirm_password: confirm_password,
        });

        if (res.data.registed) {
          setEmail(email);
          setRegisted(true);
        } else {
          alert(res.data.message);
        }
      }
    } catch (error) {
      console.log("Something went wrong.", error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="container mx-auto py-8">
      <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handleSubmit} method="POST">
        <h1 className="text-center font-bold mb-3">Block Strats</h1>
        <h2 className="text-md mb-6 text-center text-gray-400">Registration</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm_password"
          >
            Confirm Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            id="confirm_password"
            name="confirm_password"
            autoComplete="current-password"
            required
          />
        </div>
        <button
          className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          type="submit"
        >
          Register
        </button>

        <p className="my-3 text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/"
            className="text-blue-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}