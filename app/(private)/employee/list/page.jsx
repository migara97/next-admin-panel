"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import ResponsiveGallery from "react-responsive-gallery";
import Link from "next/link";
import axios from 'axios';

export default function Page() {
	const [showModal, setShowModal] = useState(false);
	const [saving, setSaving] = useState(false);
	const loadingRowsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const { data: employeeList, error } = useSWR(
		`${process.env.API_URL}/employee?_limit=10`,
		url => axios.get(url).then(res => res.data.result)
	);
	console.log(employeeList);
	const ItemsTable = ({ items }) => {
		return (
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="p-4">
							<div className="flex items-center">
								<input
									id="checkbox-all-search"
									type="checkbox"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label htmlFor="checkbox-all-search" className="sr-only">
									checkbox
								</label>
							</div>
						</th>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Position
						</th>
						<th scope="col" className="px-6 py-3">
							Status
						</th>
						<th scope="col" className="px-6 py-3">
							Monitor Images
						</th>
						<th scope="col" className="px-6 py-3">
							Details
						</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr
							key={`${item.id}`}
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<td className="w-4 p-4">
								<div className="flex items-center">
									<input
										id="checkbox-table-search-1"
										type="checkbox"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label htmlFor="checkbox-table-search-1" className="sr-only">
										checkbox
									</label>
								</div>
							</td>
							<th
								scope="row"
								className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
							>
								<div className="pl-3">
									<div className="text-base font-semibold">{item.name}</div>
								</div>
							</th>
							<td className="px-6 py-4">{item.role}</td>
							<td className="px-6 py-4">
								<div className="flex items-center">
									<div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
									{item.status}
								</div>
							</td>
							<td className="px-6 py-4">
								<Link href={`/employee/moniter/${item.user}`}> 
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</Link>
							</td>
							<td className="px-6 py-4">
								<Link href="/employee/details"> 
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
									</svg>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	};
	const TableActions = ({ searchTerm, handleSearch }) => {
		return (
			<div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
				<div className="w-full md:w-1/2">
					<form className="flex items-center">
						<label htmlFor="simple-search" className="sr-only">
							Search
						</label>
						<div className="relative w-full">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									aria-hidden="true"
									className="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<input
								type="text"
								value={searchTerm}
								onChange={handleSearch}
								id="simple-search"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Search"
								required=""
							/>
						</div>
					</form>
				</div>
			</div>
		);
	};
	const TableFooter = ({ totalPages, handleChangePage, currentPage }) => {
		return (
			<nav
				className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
				aria-label="Table navigation"
			>
				<span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
					Showing&nbsp;
					<span className="font-semibold text-gray-900 dark:text-white">
						{currentPage}
					</span>
					&nbsp;of
					<span className="font-semibold text-gray-900 dark:text-white">
						{totalPages}
					</span>
				</span>
				<ul className="inline-flex items-stretch -space-x-px">
					<li>
						<a
							href="#"
							className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							<span className="sr-only">Previous</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</li>
					{Array.from({ length: totalPages }).map((_, index) => (
						<li key={index}>
							<button
								onClick={() => handleChangePage(index + 1)}
								disabled={currentPage === index + 1}
								type="button"
								className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${
									currentPage === index + 1
										? "bg-blue-700 text-white"
										: "bg-white text-gray-500"
								} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
							>
								{index + 1}
							</button>
						</li>
					))}
					<li>
						<a
							href="#"
							className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							<span className="sr-only">Next</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</li>
				</ul>
			</nav>
		);
	};
	const ItemsTableContainer = () => {
		const [currentPage, setCurrentPage] = useState(1);
		const [searchTerm, setSearchTerm] = useState("");

		const handleChangePage = (page) => {
			setCurrentPage(page);
		};
		let pageSize = 10;
		const startIndex = (currentPage - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		const totalPages = Math.ceil(employeeList.length / pageSize);
		// const  currentData = employeeList.result.slice(startIndex, endIndex);

		//search filter
		const handleSearch = (event) => {
			setSearchTerm(event.target.value);
			setCurrentPage(1);
		};

		const filteredData = employeeList.filter((item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		const currentData = filteredData.slice(startIndex, endIndex);
		// const currentData = employeeList.result;

		return (
			<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
				<TableActions searchTerm={searchTerm} handleSearch={handleSearch} />
				<div className="overflow-x-auto">
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
						<ItemsTable items={currentData} />
					</div>
				</div>
				<TableFooter
					totalPages={totalPages}
					handleChangePage={handleChangePage}
					currentPage={currentPage}
				/>
				{/* <DeleteToast /> */}
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</div>
		);
	};
	const LoadingTable = () => {
		return (
			<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
				<div className="overflow-x-auto">
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
						<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
								<tr>
									<th scope="col" className="p-4">
										<div className="flex items-center">
											<input
												id="checkbox-all-search"
												type="checkbox"
												className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											/>
											<label htmlFor="checkbox-all-search" className="sr-only">
												checkbox
											</label>
										</div>
									</th>
									<th scope="col" className="px-6 py-3">
										Name
									</th>
									<th scope="col" className="px-6 py-3">
										Position
									</th>
									<th scope="col" className="px-6 py-3">
										Status
									</th>
									<th scope="col" className="px-6 py-3">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	};

	//main
	return (
		<section className="p-2">
			<div
				className={`mx-auto max-w-screen-xl px-2 lg:px-12 ${
					showModal ? "blur-lg" : ""
				}`}
			>
				{employeeList ? <ItemsTableContainer /> : <LoadingTable />}
			</div>
		</section>
	);
}
