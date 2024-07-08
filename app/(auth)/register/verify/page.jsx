"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";


export default function page() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    if (email === undefined || email === null) {
        redirect("/login?error=email not found");
    }

    const { status } = useSession({ required: false });
    const [otp, setOtp] = useState("");
    const [verfied, setVerfied] = useState(false);

    if (status === "authenticated") {
        redirect("/dashboard");
    }

    useEffect(() => {
        if (verfied) {
            redirect("login?verified=true")
        }
    }, [verfied]);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (otp) {
                const res = await axios.post(`${process.env.API_URL}/user/verify`, {
                    email: email,
                    verification_code: otp
                });

                let verfied = res.data.result.verfied;

                if (verfied) {
                    setVerfied(true);
                } else {
                    alert(res.data.message);
                }
            }
        } catch {
            alert("Something went wrong");
        }
    }

    return (
        <>
            <div className="container mx-auto py-8">
                <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" method="POST" onSubmit={handleSubmit}>
                    <h1 className="text-center font-bold mb-3">Block Strats</h1>
                    <h2 className="text-md mb-6 text-center text-gray-400"> Verify User Account</h2>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="name">
                        Enter your otp code
                    </label>
                    <OTPInput
                        inputStyle={"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"}
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputType="number"
                        containerStyle={true}
                        shouldAutoFocus={true}
                        renderSeparator={<span style={{ width: "8px" }}></span>}
                        renderInput={props => <input {...props} />}
                    />
                    </div>
                    <button
                    className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                    type="submit"
                    >
                    Verify Now
                    </button>

                    <p className="my-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    <Link
                        href="/login"
                        className="text-blue-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                        Back to Login in
                    </Link>
                    </p>
                </form>
            </div>
        </>
    )
}