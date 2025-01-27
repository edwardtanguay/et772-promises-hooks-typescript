import { useEffect, useState } from "react";
import * as tools from "../tools";
import { WaitUntilLoaded } from "../components/WaitUntilLoaded";

export const PagePromiseAll = () => {
	const [totalItems, setTotalItems] = useState(0);
	const [message, setMessage] = useState("");

	// useEffect(() => {
	// 	Promise.all([tools.getJobs(), tools.getEmployees()])
	// 		.then((results) => {
	// 			const [jobs, employees] = results;
	// 			setTotalItems(jobs.length + employees.length);
	// 		})
	// 		.catch((err: unknown) => {
	// 			setMessage(
	// 				`Error fetching jobs and employees: ${
	// 					(err as Error).message
	// 				}`
	// 			);
	// 		});
	// }, []);

	useEffect(() => {
		(async () => {
			try {
				const [jobs, employees] = await Promise.all([tools.getJobs(), tools.getEmployees()]);
				setTotalItems(jobs.length + employees.length);
			} catch (err: unknown) {
				setMessage(`Error fetching jobs and employees: ${(err as Error).message}`);
			}
		})();
	}, []);
	return (
		<>
			<h2 className="appMessage">
			Promise.all waits until all promises have resolved, and if one does not resolve, throws an error.
			</h2>
			{message.trim() !== "" && (
				<h2 className="bg-red-400 p-2 rounded w-fit mb-3">{message}</h2>
			)}
			<WaitUntilLoaded total={totalItems}>
				<p>There are {totalItems} items.</p>
			</WaitUntilLoaded>
		</>
	);
};
