"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import ResponsiveGallery from "react-responsive-gallery";
import { useParams } from 'next/navigation'

export default function Page() {
	const [showModal, setShowModal] = useState(false);
	const [saving, setSaving] = useState(false);
	const loadingRowsCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data: products, error } = useSWR(
		"https://api.escuelajs.co/api/v1/products",
		fetcher
	);
	const params = useParams()
	console.log(params)
	
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
                <div className="relative max-w-sm">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
					</div>
					<input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
				</div>
			</div>
		);
	};
	// Table Footer in this table
	// const TableFooter = ({ totalPages, handleChangePage, currentPage }) => {
	// 	return (
	// 		<nav
	// 			className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
	// 			aria-label="Table navigation"
	// 		>
	// 			<span className="text-sm font-normal text-gray-500 dark:text-gray-400 space-x-2">
	// 				Showing&nbsp;
	// 				<span className="font-semibold text-gray-900 dark:text-white">
	// 					{currentPage}
	// 				</span>
	// 				&nbsp;of
	// 				<span className="font-semibold text-gray-900 dark:text-white">
	// 					{totalPages}
	// 				</span>
	// 			</span>
	// 			<ul className="inline-flex items-stretch -space-x-px">
	// 				<li>
	// 					<a
	// 						href="#"
	// 						className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
	// 					>
	// 						<span className="sr-only">Previous</span>
	// 						<svg
	// 							className="w-5 h-5"
	// 							aria-hidden="true"
	// 							fill="currentColor"
	// 							viewBox="0 0 20 20"
	// 							xmlns="http://www.w3.org/2000/svg"
	// 						>
	// 							<path
	// 								fillRule="evenodd"
	// 								d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
	// 								clipRule="evenodd"
	// 							/>
	// 						</svg>
	// 					</a>
	// 				</li>
	// 				{Array.from({ length: totalPages }).map((_, index) => (
	// 					<li key={index}>
	// 						<button
	// 							onClick={() => handleChangePage(index + 1)}
	// 							disabled={currentPage === index + 1}
	// 							type="button"
	// 							className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${
	// 								currentPage === index + 1
	// 									? "bg-blue-700 text-white"
	// 									: "bg-white text-gray-500"
	// 							} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
	// 						>
	// 							{index + 1}
	// 						</button>
	// 					</li>
	// 				))}
	// 				<li>
	// 					<a
	// 						href="#"
	// 						className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
	// 					>
	// 						<span className="sr-only">Next</span>
	// 						<svg
	// 							className="w-5 h-5"
	// 							aria-hidden="true"
	// 							fill="currentColor"
	// 							viewBox="0 0 20 20"
	// 							xmlns="http://www.w3.org/2000/svg"
	// 						>
	// 							<path
	// 								fillRule="evenodd"
	// 								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
	// 								clipRule="evenodd"
	// 							/>
	// 						</svg>
	// 					</a>
	// 				</li>
	// 			</ul>
	// 		</nav>
	// 	);
	// };
	const ItemsTableContainer = () => {
		const [currentPage, setCurrentPage] = useState(1);
		const [searchTerm, setSearchTerm] = useState("");

		const handleChangePage = (page) => {
			setCurrentPage(page);
		};
		let pageSize = 10;
		const startIndex = (currentPage - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		const totalPages = Math.ceil(products.length / pageSize);
		//const  currentData = products.slice(startIndex, endIndex);

		//search filter
		const handleSearch = (event) => {
			setSearchTerm(event.target.value);
			setCurrentPage(1);
		};

		const filteredData = products.filter((item) =>
			item.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		const currentData = filteredData.slice(startIndex, endIndex);

		return (
			<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
				<TableActions searchTerm={searchTerm} handleSearch={handleSearch} />
				<div className="overflow-x-auto">
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <ResponsiveGallery
								useLightBox
								images={[
									{
										src: "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg",
										alt: "image 1 alt test",
										orderS: 1,
										orderM: 1,
										orderL: 1,
									},
									{
										src: "https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg",
										alt: "image 2 alt test",
										orderS: 2,
										orderM: 2,
										orderL: 2,
									},
									{
										src: "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg",
										orderS: 4,
										orderM: 3,
										orderL: 6,
									},
									{
										src: "https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg",
										orderS: 3,
										orderM: 4,
										orderL: 5,
									},
									{
										src: "https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg",
										orderS: 5,
										orderM: 6,
										orderL: 4,
									},
									{
										src: "https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg",
										orderS: 6,
										orderM: 5,
										orderL: 3,
										imgClassName: "img6-style",
									},
									{
										src: "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg",
										alt: "image 1 alt test",
										orderS: 1,
										orderM: 1,
										orderL: 1,
									},
									{
										src: "https://cdn.pixabay.com/photo/2019/03/09/17/30/horse-4044547_960_720.jpg",
										alt: "image 2 alt test",
										orderS: 2,
										orderM: 2,
										orderL: 2,
									},
									{
										src: "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg",
										orderS: 4,
										orderM: 3,
										orderL: 6,
									},
									{
										src: "https://cdn.pixabay.com/photo/2014/07/08/12/36/bird-386725_960_720.jpg",
										orderS: 3,
										orderM: 4,
										orderL: 5,
									},
									{
										src: "https://failed-cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg",
										orderS: 5,
										orderM: 6,
										orderL: 4,
									},
									{
										src: "https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg",
										orderS: 6,
										orderM: 5,
										orderL: 3,
										imgClassName: "img6-style",
									},
								]}
							/>
					</div>
				</div>
				{/* <TableFooter
					totalPages={totalPages}
					handleChangePage={handleChangePage}
					currentPage={currentPage}
				/> */}
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
						
					</div>
				</div>
			</div>
		);
	};

	//main
	return (
		<section className="p-2">
			<div
				className={`mx-auto max-w-screen-xl px-2 lg:px-12`}
			>
				{products ? <ItemsTableContainer /> : <LoadingTable />}
			</div>
		</section>
	);
}
