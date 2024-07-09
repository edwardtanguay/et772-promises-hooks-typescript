/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Employee } from "../types";
import * as tools from "../tools";
import { WaitUntilLoaded } from "../components/WaitUntilLoaded";

export const PagePromiseAny = () => {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [message, setMessage] = useState("");

	useEffect(() => {
		(async () => {
			try {
				const _employees = (await Promise.any([
					tools.getEmployees(),
					tools.getEmployees2(),
				])) as Employee[];
				setEmployees(_employees);
			} catch (err: unknown) {
				setMessage(`${(err as Error).message}`);
			}
		})();
	}, []);

	return (
		<>
			<h2 className="appMessage">
				With Promise.any, you can have e.g. two APIs that load the same
				data and use the data from the API that returns its data the fastest.
				Note that to use Promise.any, you need to set "target"="es2021" in your
				tsconfig.json.
			</h2>
			{message.trim() !== "" ? (
				<h2 className="bg-red-400 p-2 rounded w-fit mb-3">{message}</h2>
			) : (
				<WaitUntilLoaded total={employees.length}>
					<p>There are {employees.length} employees.</p>
				</WaitUntilLoaded>
			)}
		</>
	);
};
