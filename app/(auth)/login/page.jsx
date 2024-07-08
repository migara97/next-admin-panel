"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

export default function Login() {
	const { push } = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { status } = useSession({ required: false });

	if (status === "authenticated") {
		redirect("/dashboard");
	}

	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl");

	if (callbackUrl) {
		redirect(callbackUrl);
	}

	async function handleSubmit (e) {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;

		if (email && password) {
			signIn("credentials", {
				email: email,
				password: password,
				callbackUrl: `${process.env.BASE_URL}/dashboard`
			});
		}
	}

	function loginHandler(paltform) {
		switch (paltform) {
			case "google":
				void signIn("google", { callbackUrl: `${process.env.BASE_URL}/dashboard` });
			default:
				break;
		}
	}
	return (
		<div className="container mx-auto py-8">
			<form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
				onSubmit={handleSubmit}>
				<h1 className="text-center font-bold mb-3">Block Strats</h1>
				<h2 className="text-md mb-6 text-center text-gray-400">Login</h2>
				{error && <p className="text-red-500 mt-2">{error}</p>}
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="email"
					>
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
						autoComplete="email"
						required
					/>
				</div>
				<div className="flex items-center justify-between my-5">
					<div className="flex items-start">
						<div className="flex items-center h-5">
							<input
								id="remember"
								aria-describedby="remember"
								type="checkbox"
								className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
								required=""
							/>
						</div>
						<div className="ml-3 text-sm">
							<label
								htmlFor="remember"
								className="text-gray-500 dark:text-gray-300"
							>
								Remember me
							</label>
						</div>
					</div>
					<Link
						href="/forgot-password"
						className="text-blue-500 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
					>
						Forgot password?
					</Link>
				</div>
				<button
					className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
					type="submit"
				>
					Login
				</button>
				<p className="my-3 text-sm font-light text-gray-500 dark:text-gray-400">
					Don&apos;t have an account?{" "}
					<Link
						href="/register"
						className="text-blue-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
					>
						Register
					</Link>
				</p>
				<div className="flex gap-2 justify-center mt-5">
					<div
						className="btn btn-md text-xl"
						onClick={() => loginHandler("google")}
					>
						<FcGoogle />
					</div>
				</div>
			</form>
		</div>
	);
}
