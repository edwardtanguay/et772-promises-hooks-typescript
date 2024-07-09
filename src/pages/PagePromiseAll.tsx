import { useEffect, useState } from "react";
import * as tools from "../tools";
import { WaitUntilLoaded } from "../components/WaitUntilLoaded";

export const PagePromiseAll = () => {
	const [totalItems, setTotalItems] = useState(0);
	const [message, setMessage] = useState("");

	useEffect(() => {
		Promise.all([tools.getJobs(), tools.getEmployees()])
			.then((results) => {
				const [jobs, employees] = results;
				setTotalItems(jobs.length + employees.length);
			})
			.catch((err: unknown) => {
				setMessage(
					`Error fetching jobs and employees: ${(err as Error).message}`
				);
			});
	}, []);
	return (
		<>
			{message.trim() !== "" && (
				<h2 className="bg-red-400 p-2 rounded w-fit mb-3">{message}</h2>
			)}
			<WaitUntilLoaded total={totalItems}>
				<p>There are {totalItems} items.</p>
			</WaitUntilLoaded>
		</>
	);
};
