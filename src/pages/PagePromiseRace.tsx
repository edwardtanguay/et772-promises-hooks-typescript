/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Employee } from "../types";
import * as tools from "../tools";
import { WaitUntilLoaded } from "../components/WaitUntilLoaded";

export const PagePromiseRace = () => {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [message, setMessage] = useState("");

	const timeLimit = new Promise((_, reject) => {
		setTimeout(() => {
			reject(new Error("API too slow, data was not loaded."));
		}, 2000);
	});

	useEffect(() => {
		(async () => {
			try {
				const _employees = (await Promise.race([tools.getEmployees(), timeLimit])) as Employee[]
				setEmployees(_employees);
			} catch (err: unknown) {
				setMessage(
					`Error fetching employees: ${(err as Error).message}`
				);
			}
		})();
	}, []);

	return (
		<>
			{message.trim() !== "" && (
				<h2 className="bg-red-400 p-2 rounded w-fit mb-3">{message}</h2>
			)}
			<WaitUntilLoaded total={employees.length}>
				<p>There are {employees.length} employees.</p>
			</WaitUntilLoaded>
		</>
	);
};
