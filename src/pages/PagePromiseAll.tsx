import { useEffect, useState } from "react";
import * as tools from "../tools";
import { WaitUntilLoaded } from "../components/WaitUntilLoaded";

export const PagePromiseAll = () => {
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		Promise.all([tools.getJobs(), tools.getEmployees()]).then((results) => {
			const [jobs, employees] = results;
			setTotalItems(jobs.length + employees.length);
		});
	}, []);
	return (
		<WaitUntilLoaded total={totalItems}>
			<p>There are {totalItems} items.</p>
		</WaitUntilLoaded>
	);
};
