"use client";
import React, { useEffect, useState } from "react";

function dashboard() {
	return (
		<>
			<div className="w-full mx-auto bg-white p-8 rounded-md shadow-md">

				<div className="px-4 pt-6">
					<div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">

						<div
							className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"
						>
							<div className="flex items-center justify-between mb-4">
								<div className="flex-shrink-0">
									<span
										className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white"
									>$45,385</span>
									<h3 className="text-base font-light text-gray-500 dark:text-gray-400">
										Sales this week
									</h3>
								</div>
								<div
									className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400"
								>
									12.5%
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
											clipRule="evenodd"></path>
									</svg>
								</div>
							</div>

							<div id="main-chart"></div>

							<div
								className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700"
							>
								<div>
									<button
										className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
										type="button"
										data-dropdown-toggle="weekly-sales-dropdown"
									>Last 7 days <svg
										className="w-4 h-4 ml-2"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									><path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19 9l-7 7-7-7"></path></svg></button>

									<div
										className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
										id="weekly-sales-dropdown"
									>
										<div className="px-4 py-3" role="none">
											<p
												className="text-sm font-medium text-gray-900 truncate dark:text-white"
												role="none"
											>
												Sep 16, 2021 - Sep 22, 2021
											</p>
										</div>
										<ul className="py-1" role="none">
											<li>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
													role="menuitem">Yesterday</a>
											</li>
											<li>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
													role="menuitem">Today</a>
											</li>
											<li>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
													role="menuitem">Last 7 days</a>
											</li>
											<li>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
													role="menuitem">Last 30 days</a>
											</li>
											<li>
												<a
													href="#"
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
													role="menuitem">Last 90 days</a>
											</li>
										</ul>
										<div className="py-1" role="none">
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem">Custom...</a>
										</div>
									</div>
								</div>
								<div className="flex-shrink-0">
									<a
										href="#"
										className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
									>
										Sales Report
										<svg
											className="w-4 h-4 ml-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										><path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 5l7 7-7 7"></path></svg>
									</a>
								</div>
							</div>
						</div>

					</div>
					<div
						className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3"
					>
						<div
							className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
						>
							<div className="w-full">
								<h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
									New products
								</h3>
								<span
									className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white"
								>2,340</span>
								<p
									className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400"
								>
									<span
										className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400"
									>
										<svg
											className="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path
												clipRule="evenodd"
												fillRule="evenodd"
												d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
											></path>
										</svg>
										12.5%
									</span>
									Since last month
								</p>
							</div>
							<div className="w-full" id="new-products-chart"></div>
						</div>
						<div
							className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800"
						>
							<div className="w-full">
								<h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
									Users
								</h3>
								<span
									className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white"
								>2,340</span>
								<p
									className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400"
								>
									<span
										className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400"
									>
										<svg
											className="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
										>
											<path
												clipRule="evenodd"
												fillRule="evenodd"
												d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
											></path>
										</svg>
										3,4%
									</span>
									Since last month
								</p>
							</div>
							<div className="w-full" id="week-signups-chart"></div>
						</div>
						<div
							className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
						>
							<div className="w-full">
								<h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
									Audience by age
								</h3>
								<div className="flex items-center mb-2">
									<div className="w-16 text-sm font-medium dark:text-white">50+</div>
									<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
										<div
											className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"

										>
										</div>
									</div>
								</div>
								<div className="flex items-center mb-2">
									<div className="w-16 text-sm font-medium dark:text-white">40+</div>
									<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
										<div
											className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"

										>
										</div>
									</div>
								</div>
								<div className="flex items-center mb-2">
									<div className="w-16 text-sm font-medium dark:text-white">30+</div>
									<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
										<div
											className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"

										>
										</div>
									</div>
								</div>
								<div className="flex items-center mb-2">
									<div className="w-16 text-sm font-medium dark:text-white">20+</div>
									<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
										<div
											className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"

										>
										</div>
									</div>
								</div>
							</div>
							<div id="traffic-channels-chart" className="w-full"></div>
						</div>
					</div>


				</div>
			</div>
		</>
	);
}

export default dashboard; 